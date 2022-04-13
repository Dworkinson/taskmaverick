import {BasePage} from "../base.page";

export class CheckCreatedLocation extends BasePage {
    _location: string;
    constructor(browser: WebdriverIO.Browser, locationName: string) {
        super(browser);
        this._location = locationName;
    }

    private get location(): Promise<WebdriverIO.Element> {
        return this.browser.$(`.p-0*=${this._location}`);
    }

    async clickOnLocation(): Promise<void> {
        await (await this.location).waitForDisplayed();
        await (await this.location).click();
    }
}
