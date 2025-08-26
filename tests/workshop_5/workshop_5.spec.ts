import { test, expect } from '@playwright/test';

test('Open new window and navigate back', async ({ context, page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_5/index.html');
  const pagePromise = context.waitForEvent('page');
  await page.click('#openNewWindow');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(newPage.getByRole('heading', { name: 'Welcome to the New Page' })).toBeVisible();
});

test('Add Cookie', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_5/index.html');
  await page.click('#setCookie');
  const cookies = await page
    .context()
    .cookies('file:///Users/alext/playwright/tests/workshop_5/index.html');
  const sesionCookie = cookies.find((cookies) => cookies.name === 'session');
  console.log('Session cookie', sesionCookie);
  await expect(sesionCookie).toBeDefined();
});

test('Delete cookie', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_5/index.html');
  await page.click('#setCookie');
  const cookies = await page
    .context()
    .cookies('file:///Users/alext/playwright/tests/workshop_5/index.html');
  const sesionCookie = cookies.find((cookies) => cookies.name === 'session');
  console.log('Session cookie',  );
  await page.click('#deleteCookie'); 
  const deleteCookies = await page
    .context()
    .cookies('file:///Users/alext/playwright/tests/workshop_5/index.html');
    const deletedSesionCookie = deleteCookies .find((cookies) => cookies.name === 'session');
    await expect(deletedSesionCookie).toBeUndefined();

});
