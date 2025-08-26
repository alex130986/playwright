import { test, expect } from '@playwright/test';

test('Advanced iteractions', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_3/index.html ');
  await page.hover('button#hover-me');
  expect(await page.textContent('button#hover-me')).toContain('Text Changed!');

  await page.click('button#context-menu', { button: 'right' });
  expect(await page.getByText('Context Menu Appears!').textContent()).toContain(
    'Context Menu Appears!',
  );

  await page.dblclick('button#double-click');
  await expect(page.locator('img')).toHaveCount(1);
});

test('Drag & Drop', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_3/index.html ');
  await page.dragAndDrop('.drag-source', '.drop-target');
  expect(await page.textContent('.drop-target')).toContain('Success');
});

test('Hadling IFrame', async ({ page }) => {
  await page.goto('file:///Users/alext/playwright/tests/workshop_3/index.html ');
  const iframeElement = await page.frame({name: 'iframeName'}); 
  const inputSelector = '#iframe-input';

  if(iframeElement){
    await iframeElement.type(inputSelector, 'Hello Playwright');
    expect(await iframeElement.locator(inputSelector).inputValue())
  }
  else{
    console.error('iframe is not available ')
  }
});
