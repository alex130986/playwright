import { test, expect } from '@playwright/test';

test('Handling alerts', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_4/index.html');
  let alertMessage = '';
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    alertMessage = await dialog.message();
    await dialog.accept();
  });
  await page.click('#show-alert');
  expect(alertMessage).toBe('This is a simple alert.');
});

test('Confir m alert', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_4/index.html');
  let alertMessage = '';
  page.on('dialog', async (dialog) =>{
    alertMessage = await dialog.message(); 
    await dialog.dismiss();
  })
  await page.click('#show-confirm');
  expect(alertMessage).toBe('You clicked C ancel.');
});

test('Handling pop-ups', async ({page})=> {
  await page.goto('file:///Users/alext/playwright/tests/workshop_4/index.html');
  const[popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#open-popup'),
  ])
  await popup.waitForLoadState(); 
  await popup.close();
})
