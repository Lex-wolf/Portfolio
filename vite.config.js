import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'
import { normalizeContactPayload } from './src/utils/contactPayload.js'

async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const body = await readJsonBody(req)
          const normalized = normalizeContactPayload(body)
          if (normalized.error) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: normalized.error }))
            return
          }

          const { payload, subject, text, html } = normalized

          const apiKey = process.env.RESEND_API_KEY
          const toEmail = process.env.CONTACT_EMAIL

          if (!apiKey || !toEmail) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY or CONTACT_EMAIL in environment' }))
            return
          }

          const fromAddress =
            process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'
          const resend = new Resend(apiKey)
          const { error } = await resend.emails.send({
            from: fromAddress,
            to: toEmail,
            replyTo: payload.email,
            subject,
            text,
            html,
          })

          if (error) {
            console.error('Resend error:', error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to send message' }))
            return
          }

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        } catch (error) {
          console.error('Resend request failed:', error)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Failed to send message' }))
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react(), contactApiDevPlugin()],
  build: {
    // SSR bundle marks react as external — `scripts/build.mjs` sets PORTFOLIO_SSR=1 for that pass only.
    rollupOptions:
      process.env.PORTFOLIO_SSR === '1'
        ? {}
        : {
            output: {
              manualChunks: {
                vendor: ['react', 'react-dom'],
                motion: ['framer-motion'],
              },
            },
          },
  },
}))
