import {BasePage} from "./base.page";

export class LocationInfo extends BasePage {
    private get actionsButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Actions');
    }

    private get activateButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Activate');
    }

    private get deleteButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Delete');
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
}