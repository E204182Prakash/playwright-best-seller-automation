import path from 'path';
import { test, expect } from '@playwright/test';
import { ProductPage } from '../Pages/productPage';
const mockFilePath = path.resolve(__dirname, '../mock/productPage.html');

test('Verify wallet search result page', async ({ page }) => {
  const product = new ProductPage(page);
  await product.openHome();
  await product.searchWallet();
  //await product.openProduct();
});

test('Verify max 6 related products', async ({ page }) => {
  await page.goto(`file://${mockFilePath}`);

  const items = page.locator('#related-products li');
  await expect(items).toHaveCount(6);
});

test('Verify related product prices within ±20%', async ({ page }) => {
  await page.goto(`file://${mockFilePath}`);

  const mainPrice = Number(await page.locator('#main-price').innerText());
  const items = page.locator('#related-products li');

  const count = await items.count();
  for (let i = 0; i < count; i++) {
    const price = Number(await items.nth(i).getAttribute('data-price'));
    expect(price).toBeGreaterThanOrEqual(mainPrice * 0.8);
    expect(price).toBeLessThanOrEqual(mainPrice * 1.2);
  }
});


test('Verify page refresh behavior on related products section', async ({ page }) => {
  await page.goto(`file://${mockFilePath}`);

  const itemsBefore = await page.locator('#related-products li').count();

  await page.reload();

  const itemsAfter = await page.locator('#related-products li').count();

  expect(itemsAfter).toBe(itemsBefore);
});