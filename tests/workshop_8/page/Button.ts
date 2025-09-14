import {Page} from "@playwright/test";

export class Button {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page; 
    }
    
    async clickButton(selector: string) {
        await this.page.click(selector);
    }
}