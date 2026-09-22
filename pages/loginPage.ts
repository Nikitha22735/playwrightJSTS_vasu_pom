//Locator, Page, Browser, Context

import { expect, Locator, Page } from "@playwright/test";

export class loginPage{
    readonly emailTextBox:Locator
    readonly continueBtn:Locator
    readonly passwordTextBox:Locator
    readonly signInBtn:Locator
    readonly incorrectPasswordMessage:Locator
    constructor(page: Page){
        this.emailTextBox = page.getByRole('textbox', { name: 'Enter mobile number or email' })
        this.continueBtn = page.getByRole('button', { name: 'Continue' })
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' })
        this.signInBtn = page.getByRole('button', { name: 'Sign in123' })
        this.incorrectPasswordMessage = page.getByText('Your password is incorrect')
        
    }
    
    async enterUserName(emailId:string){
        await this.emailTextBox.fill(emailId);
    }
    async clickOnContinueBtn(){
        await this.continueBtn.click();
    }

    async enterPassword(password:string){
        await this.passwordTextBox.fill(password);
    }

    async clickOnSignInBtn(){
        await this.signInBtn.click();
    }

    async validateIncorrectPasswordMessage(){
        await expect(this.incorrectPasswordMessage).toBeVisible();
    }
    
}


