import { expect, Locator, Page } from '@playwright/test';

export class resultsPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly resultSummary: Locator;
  readonly sortingDropdown: Locator;
  readonly productCards: Locator;
  readonly firstProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.resultSummary = page.locator('span:has-text("results")').first();
    this.sortingDropdown = page.locator('select#s-result-sort-select');
    this.productCards = page.locator('div[data-component-type="s-search-result"]');
    this.firstProduct = this.productCards.first();
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateResultsLoaded(productName: string) {
    await expect(this.page).toHaveURL(/\/s\?k=/);
    await expect(this.resultSummary).toContainText('results');
    await expect(this.productCards.first()).toBeVisible();
    await expect(this.page).toHaveTitle(new RegExp(productName, 'i'));
  }

  async sortByPriceLowToHigh() {
    await this.sortingDropdown.selectOption({ label: 'Price: Low to High' });
    await this.page.waitForLoadState('networkidle');
  }

  async validatePriceSortingApplied() {
    await expect(this.sortingDropdown).toContainText('Price: Low to High');
    await expect(this.productCards.first()).toBeVisible();
  }
}
