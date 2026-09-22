import { test } from '@playwright/test';
import { resultsPage } from '../pages/resultsPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.in/');
});

test('validate search results are displayed for a valid keyword @results', async ({ page }) => {
  const resultsPageObj = new resultsPage(page);

  await resultsPageObj.searchProduct('iphone');
  await resultsPageObj.validateResultsLoaded('iphone');
});

test('validate sorting results by price low to high @results', async ({ page }) => {
  const resultsPageObj = new resultsPage(page);

  await resultsPageObj.searchProduct('iphone');
  await resultsPageObj.sortByPriceLowToHigh();
  await resultsPageObj.validatePriceSortingApplied();
});
