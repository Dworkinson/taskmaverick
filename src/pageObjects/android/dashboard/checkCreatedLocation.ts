import {BaseScreen} from "../base.screen";

export class CheckCreatedLocation extends BaseScreen {
    _location: Promise<WebdriverIO.Element>;
    constructor(browser: WebdriverIO.Browser, locationName: string) {
        super(browser);
        this._location = this.buildSelector(locationName, 'text');
    }

    async clickOnLocation(): Promise<void> {
        await (await this._location).waitForEnabled();
        await (await this._location).click();
    }
}
