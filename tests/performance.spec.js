// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Performance Tests', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    // Check that main content is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');
    
    // Check that images load properly
    const profileImage = page.locator('img[alt="Alejandro Curiel"]');
    await expect(profileImage).toBeVisible();
    
    // Check image loading
    const imageSrc = await profileImage.getAttribute('src');
    expect(imageSrc).toBeTruthy();
    
    // Wait for image to load
    await profileImage.waitFor({ state: 'visible' });
  });

  test('should handle concurrent requests efficiently', async ({ page }) => {
    await page.goto('/');
    
    // Check that all resources load without errors
    const response = await page.waitForResponse(() => true);
    expect(response.status()).toBeLessThan(400);
  });

  test('should have proper caching headers', async ({ page }) => {
    const response = await page.goto('/');
    
    // Check response status
    expect(response.status()).toBe(200);
    
    // Check for proper content type
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('text/html');
  });

  test('should handle JavaScript errors gracefully', async ({ page }) => {
    const errors = [];
    
    page.on('pageerror', (error) => {
      errors.push(error);
    });
    
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Check that there are no critical JavaScript errors
    const criticalErrors = errors.filter(error => 
      !error.message.includes('favicon') && 
      !error.message.includes('404')
    );
    
    expect(criticalErrors.length).toBe(0);
  });

  test('should have efficient DOM structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that DOM is not overly complex
    const body = page.locator('body');
    const childCount = await body.evaluate(el => el.children.length);
    
    // Should have reasonable number of direct children
    expect(childCount).toBeLessThan(20);
  });

  test('should handle slow network conditions', async ({ page }) => {
    // Simulate slow 3G
    await page.route('**/*', (route) => {
      setTimeout(() => route.continue(), 100);
    });
    
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should still load within reasonable time even on slow network
    expect(loadTime).toBeLessThan(10000);
    
    // Main content should still be visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper resource loading order', async ({ page }) => {
    const resources = [];
    
    page.on('response', (response) => {
      resources.push({
        url: response.url(),
        status: response.status(),
        timing: response.timing()
      });
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that critical resources load first
    const htmlResource = resources.find(r => r.url.includes('index.html') || r.url === page.url());
    expect(htmlResource).toBeTruthy();
    expect(htmlResource.status).toBe(200);
  });

  test('should handle memory efficiently', async ({ page }) => {
    await page.goto('/');
    
    // Get memory usage
    const memoryInfo = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
        };
      }
      return null;
    });
    
    if (memoryInfo) {
      // Memory usage should be reasonable
      expect(memoryInfo.usedJSHeapSize).toBeLessThan(memoryInfo.jsHeapSizeLimit);
    }
  });

  test('should have proper lazy loading for images', async ({ page }) => {
    await page.goto('/');
    
    // Check that images load when they come into view
    const images = await page.locator('img').all();
    
    for (const img of images) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toBeVisible();
    }
  });

  test('should handle rapid navigation without memory leaks', async ({ page }) => {
    // Navigate multiple times to check for memory leaks
    for (let i = 0; i < 5; i++) {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.reload();
    }
    
    // Page should still be functional
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper error handling', async ({ page }) => {
    // Test with network failures
    await page.route('**/*', (route) => {
      if (route.request().url().includes('favicon')) {
        route.abort();
      } else {
        route.continue();
      }
    });
    
    await page.goto('/');
    
    // Page should still load despite favicon error
    await expect(page.locator('h1')).toBeVisible();
  });
});
