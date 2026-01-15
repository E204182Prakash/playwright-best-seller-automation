import { Page, Locator } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async openHome() {
    await this.page.goto('https://www.ebay.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async searchWallet() {
    await this.page.waitForSelector('#gh-ac', { timeout: 60000 });
    await this.page.click('#gh-ac');
    await this.page.keyboard.type('wallet');
    await this.page.keyboard.press('Enter');
  }

  async openProduct() {
    const product = this.page.locator('.s-item').filter({ has: this.page.locator('.s-item__title') }).first();
    await product.locator('.s-item__link').click({ force: true });
    await this.page.waitForSelector('#prcIsum, .x-price-primary span', { timeout: 15000 });
  }

}
