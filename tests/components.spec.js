// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.removeItem('alexcuriel-audience-view');
    });
  });

  test('Hero section should display correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Alejandro Curiel');
    
    // Check job title
    await expect(page.locator('text=Senior QA Engineer | Automation, Web & Mobile')).toBeVisible();
    
    await expect(page.getByRole('tab', { name: /QA & Automation/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /Web Development/i })).toBeVisible();

    // Default QA audience tagline
    await expect(page.locator('text=I test the things other people build')).toBeVisible();
    
    // Check client line
    await expect(page.locator('text=Brandi Carlile')).toBeVisible();

    await page.getByRole('tab', { name: /Web Development/i }).click();
    await expect(
      page.getByRole('heading', { level: 2, name: /Web Developer \| React, Shopify & Client Sites/ }),
    ).toBeVisible();
    await expect(page.locator('text=The Taco Garage')).toBeVisible();
    await expect(page.locator('text=Shopify')).toBeVisible();
  });

  test('About section should be present', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to about section
    await page.locator('text=About').scrollIntoViewIfNeeded();
    
    // Check for about content
    await expect(page.locator('text=I\'ve spent 10 years breaking things')).toBeVisible();
  });

  test('About skills bars follow QA vs Web audience tab', async ({ page }) => {
    await page.goto('/');
    const about = page.locator('#about');
    await about.scrollIntoViewIfNeeded();
    await expect(about.getByText('Playwright Automation')).toBeVisible();
    await expect(about.getByText('React + Vite · production SPAs')).not.toBeVisible();

    await page.getByRole('tab', { name: /Web Development/i }).click();
    await expect(about.getByText('React + Vite · production SPAs')).toBeVisible();
    await expect(about.getByText('Playwright Automation')).not.toBeVisible();

    await page.getByRole('tab', { name: /QA & Automation/i }).click();
    await expect(about.getByText('Playwright Automation')).toBeVisible();
  });

  test('Technologies section should display tech stack', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to technologies section
    await page.locator('text=Technologies').scrollIntoViewIfNeeded();
    
    // Check for common technologies
    const techKeywords = ['React', 'JavaScript', 'Node.js', 'Tailwind', 'Shopify'];
    
    for (const tech of techKeywords) {
      await expect(page.locator(`text=${tech}`)).toBeVisible();
    }
  });

  test('Experience section should show work history', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to experience section
    await page.locator('text=Experience').scrollIntoViewIfNeeded();
    
    // Check for experience entries
    await expect(page.locator('text=2024 – Present')).toBeVisible();
    await expect(page.locator('text=Software Engineering Consultant')).toBeVisible();
    await expect(page.locator('text=Freelance')).toBeVisible();
    
    await expect(page.locator('text=2017 - 2024')).toBeVisible();
    await expect(page.locator('text=Quality Assurance')).toBeVisible();
    await expect(page.locator('text=Analog Republic')).toBeVisible();
  });

  test('Projects section shows QA portfolio when QA audience is selected', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('tab', { name: /QA & Automation/i }).click();
    await page.locator('text=Projects').scrollIntoViewIfNeeded();

    const qaProjectTitles = [
      'Pearl Jam Official Website',
      'Eric Church Website',
      'Eric Church Official App',
      'Thomas Rhett Website',
      'Thomas Rhett Home Team App',
      'Brandi Carlile Website',
      'ACE Parking App',
      'Pride Study Website',
    ];

    for (const title of qaProjectTitles) {
      await expect(page.locator(`text=${title}`).first()).toBeVisible();
    }

    await expect(page.locator('#projects').getByText('The Taco Garage')).toHaveCount(0);
  });

  test('Projects section shows web portfolio when Web Development audience is selected', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('tab', { name: /Web Development/i }).click();
    await page.locator('text=Projects').scrollIntoViewIfNeeded();

    const webProjectTitles = [
      'The Taco Garage',
      'Geodesic Brasil Website',
      'Neuroplasticity Lab',
      'Nonprofit Tree Planting Community',
      'Astro Reminder Website',
      'Local Artist Website',
    ];

    for (const title of webProjectTitles) {
      await expect(page.locator(`text=${title}`).first()).toBeVisible();
    }

    await expect(page.locator('#projects').getByText('Pearl Jam Official Website')).toHaveCount(0);
  });

  test('Contact section should have contact information', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('text=Contact').scrollIntoViewIfNeeded();
    
    // Check for contact details
    await expect(page.locator('text=World Wide Remote')).toBeVisible();
    await expect(page.locator('text=+1 619 - 786 0658')).toBeVisible();
    await expect(page.locator('text=info@alexcuriel.com')).toBeVisible();
  });

  test('Contact form shows inquiry type and conditional fields', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    const inquirySelect = page.locator('#contact-inquiry-type');
    await expect(inquirySelect).toBeVisible();
    await expect(page.locator('label[for="contact-inquiry-type"]')).toContainText(
      'What are you contacting me about?',
    );

    await inquirySelect.selectOption('employment');
    await expect(page.locator('#contact-employer-company')).toBeVisible();
    await expect(page.locator('#contact-position-title')).toBeVisible();
    await expect(page.locator('#contact-role-type')).toBeVisible();
    await expect(page.locator('#contact-business-name')).toBeHidden();

    await inquirySelect.selectOption('project');
    await expect(page.locator('#contact-business-name')).toBeVisible();
    await expect(page.locator('#contact-project-type')).toBeVisible();
    await expect(page.locator('#contact-employer-company')).toBeHidden();
  });

  test('Contact form validates required inquiry type on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await page.locator('#contact-name').fill('Test User');
    await page.locator('#contact-email').fill('test@example.com');
    await page.locator('#contact-message').fill('Hello from Playwright validation test.');
    await page.locator('.contact-submit').click();

    const inquirySelect = page.locator('#contact-inquiry-type');
    await expect(inquirySelect).toBeFocused();
  });

  test('Contact form layout works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await expect(page.locator('#contact-inquiry-type')).toBeVisible();
    await expect(page.locator('#contact-message')).toBeVisible();
    await expect(page.locator('.contact-submit')).toBeVisible();

    await page.locator('#contact-inquiry-type').selectOption('general');
    await expect(page.locator('#contact-employer-company')).toBeHidden();
    await expect(page.locator('#contact-business-name')).toBeHidden();
  });

  test('Web project external link is available from the drawer', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('tab', { name: /Web Development/i }).click();
    await page.locator('#projects').getByRole('heading', { name: 'The Taco Garage' }).click();

    const linkElement = page.locator('a[href="https://www.thetacogarage.com"]');
    await expect(linkElement).toBeVisible();
    await expect(linkElement).toHaveAttribute('target', '_blank');
  });

  test('QA project external link is available from the drawer', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('tab', { name: /QA & Automation/i }).click();
    await page.locator('#projects').getByRole('heading', { name: 'Pearl Jam Official Website' }).click();

    const linkElement = page.locator('a[href="https://pearljam.com/"]');
    await expect(linkElement).toBeVisible();
    await expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
