import {BasePage} from "../base.page";

export class LocationInfoComponent extends BasePage {
    private get actionsButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*="btn-primary"]');
    }

    private get activateButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*=text-primary]');
    }

    private get deleteButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*=text-danger]');
    }

    private get info(): Promise<WebdriverIO.Element> {
        return this.browser.$('[id="info"]');
    }

    private get people(): Promise<WebdriverIO.Element> {
        return this.browser.$('[id="people"]');
    }

    private get metrics(): Promise<WebdriverIO.Element> {
        return this.browser.$('[id="metrics"]');
    }

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
        await (await this.actionsButton).waitForEnabled();
        await (await this.actionsButton).click();
    }

    async clickOnActivateButton(): Promise<void> {
        await (await this.activateButton).waitForEnabled();
        await (await this.activateButton).click();
    }
}
