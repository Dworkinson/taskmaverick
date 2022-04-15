import {BasePage} from "../base.page";

export class LocationInfoComponent extends BasePage {
    private get locationContent(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[class="col-sm"] [class*="row"]');
    }

    async getLocationContent(desiredContent: string): Promise<string> {
        await this.browser.$('[class="col-sm"] [class*="row"]').waitForDisplayed();

        let allContent = new Map<string, string>();
        for (let row of await this.locationContent) {
            const key = (await row.$('[class*="col-5"]').getText());
            const val = (await row.getText()).split('\n').pop();
            allContent.set(key, val);
        }
        return allContent.get(desiredContent);
    }

    async clickOnActionsButton(): Promise<void> {
        const actions = await this.browser.$('[class*="btn-primary"]');
        await actions.waitForClickable();
        await actions.click();
    }

    async clickOnActivateButton(): Promise<void> {
        const activate = this.browser.$('[class*=text-primary]');
        await activate.waitForClickable();
        await activate.click();
    }

    async clickOnDeactivateButton(): Promise<void> {
        const deactivate = this.browser.$('//*[contains(text(), "Deactivate")]');
        await deactivate.waitForClickable();
        await deactivate.click();
    }

    async clickOnDeleteButton(): Promise<void> {
        const deleteBtn = await this.browser.$('[class*=text-danger]');
        await deleteBtn.waitForClickable();
        await deleteBtn.click();
    }

    async clickOnConfirmButton(): Promise<void> {
        const confirm = this.browser.$('[class*="btn-danger"]');
        await confirm.waitForClickable();
        await confirm.click();
    }

    async clickOnCloseButton(): Promise<void> {
        const close = this.browser.$('[class*="btn-close"]');
        await close.waitForClickable();
        await close.click();
    }
}
