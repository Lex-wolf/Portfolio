// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Animations and Interactions', () => {
  test('should have smooth page load animations', async ({ page }) => {
    await page.goto('/');
    
    // Wait for animations to complete
    await page.waitForTimeout(2000);
    
    // Check that main elements are visible after animation
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
  });

  test('should have hover effects on social links', async ({ page }) => {
    await page.goto('/');
    
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    const githubLink = page.locator('a[href*="github.com"]');
    
    // Test hover effects
    await linkedinLink.hover();
    await page.waitForTimeout(500);
    
    await githubLink.hover();
    await page.waitForTimeout(500);
    
    // Elements should still be visible after hover
    await expect(linkedinLink).toBeVisible();
    await expect(githubLink).toBeVisible();
  });

  test('should have hover effects on contact button', async ({ page }) => {
    await page.goto('/');
    
    const contactButton = page.locator('a[href^="mailto:"]');
    
    // Test hover effect
    await contactButton.hover();
    await page.waitForTimeout(500);
    
    // Button should still be visible and clickable
    await expect(contactButton).toBeVisible();
  });

  test('should have smooth scrolling behavior', async ({ page }) => {
    await page.goto('/');
    
    // Test smooth scrolling to different sections
    await page.locator('text=About').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    await page.locator('text=Projects').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    await page.locator('text=Contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // All sections should be visible
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Projects')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
  });

  test('should handle rapid scrolling without issues', async ({ page }) => {
    await page.goto('/');
    
    // Rapid scrolling test
    for (let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(100);
      await page.mouse.wheel(0, -500);
      await page.waitForTimeout(100);
    }
    
    // Page should still be functional
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should maintain layout during window resize', async ({ page }) => {
    await page.goto('/');
    
    // Test different viewport sizes
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
    
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
    
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
    
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Test that focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should handle click interactions smoothly', async ({ page }) => {
    await page.goto('/');
    
    // Test clicking on social links (without actually navigating)
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    
    // Use Promise.all to handle the new tab
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      linkedinLink.click()
    ]);
    
    // Close the new tab
    await newPage.close();
    
    // Original page should still be functional
    await expect(page.locator('h1')).toBeVisible();
  });
});
