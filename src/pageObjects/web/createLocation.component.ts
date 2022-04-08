import {BasePage} from "./base.page";

export class CreateLocationComponent extends BasePage {
    private get saveContinueButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*="btn-primary"]');
    }

    private get closeButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*="btn-secondary"]');
    }

    private get nameField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[formcontrolname="name"]');
    }

    private get idField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[formcontrolname="locationId"]');
    }

    private get tagField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[formcontrolname="tags"]');
    }

    private get addressField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[placeholder*="Street"]');
    }

    private get address2Field(): Promise<WebdriverIO.Element> {
        return this.browser.$('[placeholder*="Address"]')
    }

    private get stateCountryCityDropdowns(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[class="placeholder"]')
    }

    private get searchField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[placeholder="Search"]');
    }

    private get dropdownElements(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[class*="active"] [class*=dropdown-option]');
    }

    private get zipCodeField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[placeholder="ZIP"]');
    }

    async clickOnSaveContinue(): Promise<void> {
        // await (await this.saveContinueButton).waitForEnabled();
        // await (await this.saveContinueButton).click();
        await (await this.saveContinueButton)
    }

    async clickOnClose(): Promise<void> {
        await (await this.closeButton).waitForClickable();
        await (await this.closeButton).click();
    }

    async enterName(name: string): Promise<void> {
        await (await this.nameField).waitForDisplayed();
        await (await this.nameField).setValue(name);
    }

    async enterId(id: string): Promise<void> {
        await (await this.idField).waitForDisplayed();
        await (await this.idField).setValue(id);
    }

    async enterTag(tag: string): Promise<void> {
        await (await this.tagField).waitForDisplayed();
        await (await this.tagField).setValue(tag);
    }

    async enterAddress(address: string): Promise<void> {
        await (await this.addressField).waitForDisplayed();
        await (await this.addressField).setValue(address);
    }

    async enterAddress2(address: string): Promise<void> {
        await (await this.address2Field).waitForDisplayed();
        await (await this.address2Field).setValue(address);
    }

    async clickOnStateField(): Promise<void> {
        await (await this.stateCountryCityDropdowns)[0].waitForClickable();
        await (await this.stateCountryCityDropdowns)[0].click();}

    async clickOnCountryField(): Promise<void> {
        await (await this.stateCountryCityDropdowns)[0].waitForClickable();
        await (await this.stateCountryCityDropdowns)[0].click();
    }

    async clickOnCityField(): Promise<void> {
        await (await this.stateCountryCityDropdowns)[0].waitForClickable();
        await (await this.stateCountryCityDropdowns)[0].click();
    }

    // async enterValue(val: string): Promise<void> {
    //     await (await this.searchField).waitForDisplayed();
    //     await (await this.searchField).setValue(val);
    // }

    async enterZipCode(code: number): Promise<void> {
        await (await this.zipCodeField).waitForDisplayed();
        await (await this.zipCodeField).setValue(code);
        await this.browser.keys('Enter');
    }

    async chooseRandomElement(): Promise<void> {
        await (await this.dropdownElements)[0].waitForClickable();
        const randomIndex = Math.floor(Math.random() * (await this.dropdownElements).length)
        // while(!(await (await this.dropdownElements)[randomIndex].isDisplayedInViewport())) {
        //     await this.browser.keys('Down arrow');
        // }
        // await this.browser.keys('Enter');
        await (await this.dropdownElements)[randomIndex].click();
    }
}
