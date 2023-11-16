import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Type your message...').click();
  await page.getByPlaceholder('Type your message...').fill('How do I setup playwright in my js project');
  await page.getByRole('button', { name: 'Send' }).click();

   
});