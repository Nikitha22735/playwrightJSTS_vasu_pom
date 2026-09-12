import { test } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { loginPage } from '../pages/loginPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.in/');
});
test('positive login test @login', async ({ page }) => {
  let homePageObj = new homePage(page)
  let loginPageObj = new loginPage(page)

  await homePageObj.clickOnAccountNdListBTn()
  await loginPageObj.enterUserName('trainingplaywright@gmail.com')  
  await loginPageObj.clickOnContinueBtn();
  await loginPageObj.enterPassword('Welcome@04');
  await loginPageObj.clickOnSignInBtn();
  await homePageObj.validateAmazonHomeLink();
});

test('negative login test @login', async ({ page }) => {
  let homePageObj = new homePage(page)
  let loginPageObj = new loginPage(page)

  await homePageObj.clickOnAccountNdListBTn();
  await loginPageObj.enterUserName('trainingplaywright@gmail.com');
  await loginPageObj.clickOnContinueBtn();
  await loginPageObj.enterPassword('test@123');
  await loginPageObj.clickOnSignInBtn();
  await loginPageObj.validateIncorrectPasswordMessage();
});