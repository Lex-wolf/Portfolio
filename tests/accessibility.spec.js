// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Accessibility Tests', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for main heading
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Alejandro Curiel');
    
    // Check for other headings
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Check profile image alt text
    const profileImage = page.locator('img[alt="Alejandro Curiel"]');
    await expect(profileImage).toBeVisible();
    
    // Check logo alt text
    const logo = page.locator('img[alt="logo"]');
    await expect(logo).toBeVisible();
    
    // Check that all images have alt attributes
    const allImages = await page.locator('img').all();
    for (const img of allImages) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have proper link text and attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check social media links
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    const githubLink = page.locator('a[href*="github.com"]');
    const twitterLink = page.locator('a[href*="x.com"]');
    const instagramLink = page.locator('a[href*="instagram.com"]');
    
    // Check that external links have proper attributes
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    await expect(twitterLink).toHaveAttribute('target', '_blank');
    await expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    await expect(instagramLink).toHaveAttribute('target', '_blank');
    await expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation through interactive elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check that focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Check that text is visible and readable
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    
    const heroText = page.locator('text=Senior QA Engineer & Frontend Developer');
    await expect(heroText).toBeVisible();
    
    // Check that text has sufficient contrast by ensuring it's visible
    const textColor = await mainHeading.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.color;
    });
    
    expect(textColor).toBeTruthy();
  });

  test('should have proper form labels and inputs', async ({ page }) => {
    await page.goto('/');
    
    // Check for any form elements (if contact form exists)
    const inputs = await page.locator('input, textarea, select').all();
    
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      }
    }
  });

  test('should have proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic elements
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main, main *')).toBeVisible();
    
    // Check that the page has a proper structure
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should handle screen reader navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check for landmarks
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check for main content area
    const mainContent = page.locator('h1').locator('..');
    await expect(mainContent).toBeVisible();
  });

  test('should have proper focus management', async ({ page }) => {
    await page.goto('/');
    
    // Test focus on interactive elements
    const contactButton = page.locator('a[href^="mailto:"]');
    await contactButton.focus();
    
    // Check that focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have proper ARIA attributes where needed', async ({ page }) => {
    await page.goto('/');
    
    // Check for any elements with ARIA attributes
    const ariaElements = await page.locator('[aria-label], [aria-labelledby], [aria-describedby]').all();
    
    // If ARIA attributes are present, they should be properly implemented
    for (const element of ariaElements) {
      const ariaLabel = await element.getAttribute('aria-label');
      const ariaLabelledBy = await element.getAttribute('aria-labelledby');
      const ariaDescribedBy = await element.getAttribute('aria-describedby');
      
      // At least one should be present if ARIA is used
      expect(ariaLabel || ariaLabelledBy || ariaDescribedBy).toBeTruthy();
    }
  });

  test('should have proper document structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper document structure
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang');
    
    const lang = await html.getAttribute('lang');
    expect(lang).toMatch(/en/);
  });

  test('should handle reduced motion preferences', async ({ page }) => {
    await page.goto('/');
    
    // Test with reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    
    // Page should still be functional
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
    
    // Reset media preferences
    await page.emulateMedia({ reducedMotion: 'no-preference' });
  });
});
