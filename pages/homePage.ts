//Locator, Page, Browser, Context

import { expect, Locator, Page } from "@playwright/test";

export class homePage{
    readonly accountsNdListBtn:Locator
    readonly amazonHomeLink:Locator
    constructor(page: Page){
        this.accountsNdListBtn = page.locator("//span[contains(text(),'Account & Lists')]")
        this.amazonHomeLink = page.getByRole('link', { name: 'Amazon.in', exact: true })
        
    }
    
    async clickOnAccountNdListBTn(){
        await this.accountsNdListBtn.click();
    }

    async validateAmazonHomeLink(){
        await expect(this.amazonHomeLink).not.toBeVisible();
    }
    
}


