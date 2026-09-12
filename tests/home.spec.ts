import { test, expect } from '@playwright/test';

test('validate the visibility of logo on homescreen @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("#nav-logo-sprites")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})


test('validate the visibility of searchBar on homescreen @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("input#twotabsearchtextbox")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})

test('validate the visibility of logo on homescreen 1 @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("#nav-logo-sprites")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})


test('validate the visibility of searchBar on homescreen 1 @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("input#twotabsearchtextbox")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})

test('validate the visibility of logo on homescreen 2 @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("#nav-logo-sprites")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})


test('validate the visibility of searchBar on homescreen 3 @home @smoke @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page.locator("input#twotabsearchtextbox")).toBeVisible()
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})