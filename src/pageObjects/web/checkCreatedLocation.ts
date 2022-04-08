import {BasePage} from "./base.page";

export class CheckCreatedLocation extends BasePage {
    _location: Promise<WebdriverIO.Element>;
    constructor(browser: WebdriverIO.Browser, locationName: string) {
        super(browser);
        this._location = this.browser.$(`=${locationName}`);
    }

    async clickOnLocation(): Promise<void> {
        await (await this._location).waitForClickable();
        await (await this._location).click();
    }
}
