// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Components Tests', () => {
  test('Hero section should display correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Alejandro Curiel');
    
    // Check job title
    await expect(page.locator('text=Senior QA Engineer | Automation, Web & Mobile')).toBeVisible();
    
    // Check tagline
    await expect(page.locator('text=I test the things other people build')).toBeVisible();
    
    // Check client line
    await expect(page.locator('text=Brandi Carlile')).toBeVisible();
  });

  test('About section should be present', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to about section
    await page.locator('text=About').scrollIntoViewIfNeeded();
    
    // Check for about content
    await expect(page.locator('text=I\'ve spent 10 years breaking things')).toBeVisible();
  });

  test('Technologies section should display tech stack', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to technologies section
    await page.locator('text=Technologies').scrollIntoViewIfNeeded();
    
    // Check for common technologies
    const techKeywords = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Tailwind'];
    
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

  test('Projects section should display portfolio items', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to projects section
    await page.locator('text=Projects').scrollIntoViewIfNeeded();
    
    // Check for project titles
    const projectTitles = [
      'Rose Auto Service',
      'Axe Thro Co\'s Pizza Bar',
      'Nonprofit Tree Planting Community',
      'Geodesic Brasil Website',
      'Local Artist Website',
      'Portfolio Website',
      'Weather App',
      'To Do App'
    ];
    
    for (const title of projectTitles) {
      await expect(page.locator(`text=${title}`)).toBeVisible();
    }
  });

  test('QA Projects section should display QA work', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to QA projects section
    await page.locator('text=QA Projects').scrollIntoViewIfNeeded();
    
    // Check for QA project titles
    const qaProjectTitles = [
      'Pearl Jam Official Website',
      'Eric Church Website',
      'Eric Church Official App',
      'Thomas Rhett Website',
      'Thomas Rhett Home Team App',
      'Brandi Carlile Website',
      'ACE Parking App',
      'Pride Study Website',
      'Eric Church Forums',
      'To The Stars Website'
    ];
    
    for (const title of qaProjectTitles) {
      await expect(page.locator(`text=${title}`)).toBeVisible();
    }
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

  test('Project links should be clickable', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to projects section
    await page.locator('text=Projects').scrollIntoViewIfNeeded();
    
    // Check for project links
    const projectLinks = [
      'https://www.roseautoservice.com',
      'https://axethroco.com/pizza-bar/',
      'https://ftpp.support/',
      'https://www.geodesicbrasil.com/',
      'https://chicanahummingbird.com/',
      'https://alexcuriel.com/',
      'https://weather-app-one-rho-19.vercel.app',
      'https://todo-rho-ruby.vercel.app'
    ];
    
    for (const link of projectLinks) {
      const linkElement = page.locator(`a[href="${link}"]`);
      await expect(linkElement).toBeVisible();
      await expect(linkElement).toHaveAttribute('target', '_blank');
    }
  });

  test('QA Project links should be clickable', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to QA projects section
    await page.locator('text=QA Projects').scrollIntoViewIfNeeded();
    
    // Check for QA project links
    const qaProjectLinks = [
      'https://pearljam.com/',
      'https://www.ericchurch.com/',
      'https://www.thomasrhett.com/#/',
      'https://www.brandicarlile.com/',
      'https://www.aceparking.com/',
      'https://ericchurch.topfan.com/forums',
      'https://tothestars.media/'
    ];
    
    for (const link of qaProjectLinks) {
      const linkElement = page.locator(`a[href="${link}"]`);
      await expect(linkElement).toBeVisible();
      await expect(linkElement).toHaveAttribute('target', '_blank');
    }
  });
});
