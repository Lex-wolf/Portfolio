// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Portfolio Basic Tests', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Alejandro Curiel/);
    
    // Check for main content
    await expect(page.locator('h1')).toContainText('Alejandro Curiel');
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check for viewport meta tag
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test social media links
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    const githubLink = page.locator('a[href*="github.com"]');
    const twitterLink = page.locator('a[href*="x.com"]');
    const instagramLink = page.locator('a[href*="instagram.com"]');
    
    await expect(linkedinLink).toBeVisible();
    await expect(githubLink).toBeVisible();
    await expect(twitterLink).toBeVisible();
    await expect(instagramLink).toBeVisible();
    
    // Check that links open in new tab
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(twitterLink).toHaveAttribute('target', '_blank');
    await expect(instagramLink).toHaveAttribute('target', '_blank');
  });

  test('should have contact email link', async ({ page }) => {
    await page.goto('/');
    
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:info@alexcuriel.com');
    await expect(emailLink).toContainText("Let's Work Together");
  });

  test('should display profile image', async ({ page }) => {
    await page.goto('/');
    
    const profileImage = page.locator('img[alt="Alejandro Curiel"]');
    await expect(profileImage).toBeVisible();
    
    // Check that image loads properly
    const imageSrc = await profileImage.getAttribute('src');
    expect(imageSrc).toBeTruthy();
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for main sections
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for main content sections
    const sections = [
      'About',
      'Technologies', 
      'Experience',
      'Highlights',
      'Projects',
      'QA Projects',
      'Contact'
    ];
    
    for (const section of sections) {
      // Look for section headings or content
      const sectionElement = page.locator(`text=${section}`).first();
      await expect(sectionElement).toBeVisible();
    }
  });
});
