import { test } from '@playwright/test';

test('Basic navigation', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.waitForTimeout(3000);
  await page.reload();
});

test('Iteracting with web elements', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.click('#onetrust-accept-btn-handler');
  await page.locator('//a[contains(text(), "free trial")]').click();
  await page.getByTestId('new-user-first-name-field').fill('John');
  await page.getByTestId('new-user-last-name-field').fill('Smith');
});

test('Using various locators methods', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.click('#onetrust-accept-btn-handler');
  await page.getByRole('button ', {name: 'Main menu'}).click();
  await page.getByRole('link', {name: 'Sign in'}).click();
});
