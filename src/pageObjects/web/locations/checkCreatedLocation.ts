import {BasePage} from "../base.page";

export class CheckCreatedLocation extends BasePage {
    _location: string;
    constructor(browser: WebdriverIO.Browser, locationName: string) {
        super(browser);
        this._location = locationName;
    }

    async clickOnLocation(): Promise<void> {
        const location = await this.browser.$(`.p-0*=${this._location}`);
        await location.waitForClickable();
        await location.click();
    }
}
