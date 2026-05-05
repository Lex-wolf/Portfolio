import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

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
          const { name, email, message } = await readJsonBody(req)
          if (!email || !message) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Email and message are required' }))
            return
          }

          const apiKey = process.env.RESEND_API_KEY
          const toEmail = process.env.CONTACT_EMAIL

          if (!apiKey || !toEmail) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY or CONTACT_EMAIL in environment' }))
            return
          }

          const resend = new Resend(apiKey)
          await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            replyTo: email,
            subject: `Portfolio message from ${name || email}`,
            text: `Name: ${name || 'Not provided'}\nEmail: ${email}\n\n${message}`,
          })

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        } catch (error) {
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
