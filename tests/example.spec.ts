import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tweetsinwelsh.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Learning Welsh through Tweets/);
});

test('get about link', async ({ page }) => {
  await page.goto('https://tweetsinwelsh.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'About' }).click();

  // Expects page to have a heading 
  await expect(page.getByRole('heading', { name: 'Learning Welsh through Tweets' })).toBeVisible();
});
