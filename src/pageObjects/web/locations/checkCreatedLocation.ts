import {BasePage} from "../base.page";
import {LocationInfoComponent} from "./locationInfo.component";

export class CheckCreatedLocation extends BasePage {
    _location: string;
    locationInfo: LocationInfoComponent;

    constructor(browser: WebdriverIO.Browser, locationName: string, locationInfo = new LocationInfoComponent(browser)) {
        super(browser);
        this._location = locationName;
        this.locationInfo = locationInfo;
    }

    private get location(): Promise<WebdriverIO.Element> {
        return this.browser.$(`.p-0*=${this._location}`);
    }

    async clickOnLocation(): Promise<void> {
        await (await this.location).waitForDisplayed();
        await (await this.location).click();
    }
}
