// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Responsive Design Tests', () => {
  test('should display correctly on desktop (1920x1080)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Check main elements are visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that content is properly laid out
    const heroSection = page.locator('h1').locator('..');
    await expect(heroSection).toBeVisible();
  });

  test('should display correctly on laptop (1024x768)', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should display correctly on tablet (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that content stacks properly on tablet
    const heroContent = page.locator('h1').locator('..');
    await expect(heroContent).toBeVisible();
  });

  test('should display correctly on mobile (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img[alt="Alejandro Curiel"]')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that text is readable on mobile
    const heroText = page.locator('h1');
    await expect(heroText).toBeVisible();
  });

  test('should handle small mobile screens (320x568)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that content doesn't overflow
    const body = page.locator('body');
    const bodyBox = await body.boundingBox();
    expect(bodyBox.width).toBeLessThanOrEqual(320);
  });

  test('should maintain navigation on all screen sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1024, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 },
      { width: 320, height: 568 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      // Check navigation elements
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible();
      await expect(page.locator('a[href*="github.com"]')).toBeVisible();
      await expect(page.locator('a[href*="x.com"]')).toBeVisible();
      await expect(page.locator('a[href*="instagram.com"]')).toBeVisible();
    }
  });

  test('should maintain project cards layout on different screens', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1024, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      // Scroll to projects section
      await page.locator('text=Projects').scrollIntoViewIfNeeded();
      
      // Check that project cards are visible
      await expect(page.locator('text=Rose Auto Service')).toBeVisible();
      await expect(page.locator('text=Axe Thro Co\'s Pizza Bar')).toBeVisible();
    }
  });

  test('should maintain QA projects layout on different screens', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1024, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      // Scroll to QA projects section
      await page.locator('text=QA Projects').scrollIntoViewIfNeeded();
      
      // Check that QA project cards are visible
      await expect(page.locator('text=Pearl Jam Official Website')).toBeVisible();
      await expect(page.locator('text=Eric Church Website')).toBeVisible();
    }
  });

  test('should handle orientation changes', async ({ page }) => {
    // Start in landscape
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    
    // Switch to portrait
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
    
    // Switch back to landscape
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(500);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should not have horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that there's no horizontal scroll
    const body = page.locator('body');
    const bodyBox = await body.boundingBox();
    
    // Body width should not exceed viewport width
    expect(bodyBox.width).toBeLessThanOrEqual(375);
    
    // Check that all content is within viewport
    const allElements = await page.locator('*').all();
    for (const element of allElements) {
      const box = await element.boundingBox();
      if (box) {
        expect(box.x + box.width).toBeLessThanOrEqual(375);
      }
    }
  });
});
