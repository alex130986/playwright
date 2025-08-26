 import { test, expect } from '@playwright/test';

 test('Basic navigation', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const newToDo = await page.getByPlaceholder('What needs to be done?'); 
  await newToDo.fill('John Doe');
  await newToDo.press('Enter');
  await newToDo.fill('JJ Doe');
  await newToDo.press('Enter');
  const firstTodo = page.getByTestId('todo-item').nth(0); 
  await firstTodo.getByRole('checkbox').check();
  const secondTodo = page.getByTestId('todo-item').nth(1);
  await expect(secondTodo).not.toHaveClass('completed');
  await expect(firstTodo).toHaveClass('completed');
});

test.only('Handling form', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const placeholder = '[placeholder="What needs to be done?"]';
  await page.fill(placeholder, 'John Doe ');
  await page.locator(placeholder).press('Enter');
  const checkbox = await page.locator('.toggle');
  await checkbox.check(); 
});
