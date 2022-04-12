import {BasePage} from "../base.page";

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

    private get createNewTag(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*=new-tag]');
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

    private get dropdownElements(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[class*="active"] [class*=dropdown-option]');
    }

    private get zipCodeField(): Promise<WebdriverIO.Element> {
        return this.browser.$('[placeholder="ZIP"]');
    }

    private get discardButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class="modal-dialog"] [class="btn btn-danger"]');
    }

    private get locationHeader(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[class="border-bottom"] [class="d-flex"] [class*="step d-flex"]');
    }

    async clickOnPeopleInLocation(): Promise<void> {
        await this.browser.pause();
        await (await this.locationHeader)[1].waitForDisplayed();
        await (await this.locationHeader)[1].click()
    }

    async clickOnPeopleInDepartment(): Promise<void> {
        await this.browser.pause();
        await (await this.locationHeader)[2].waitForDisplayed();
        await (await this.locationHeader)[2].click()
    }

    async clickOnPeopleInLocationGroup(): Promise<void> {
        await this.browser.pause();
        await (await this.locationHeader)[3].waitForDisplayed();
        await (await this.locationHeader)[3].click()
    }

    async clickOnSave(): Promise<void> {
        await this.browser.pause();
        await (await this.saveContinueButton).waitForEnabled();
        await (await this.saveContinueButton).click();
    }

    async clickOnClose(): Promise<void> {
        await (await this.closeButton).waitForEnabled();
        await (await this.closeButton).click();
    }

    async enterName(name: string): Promise<void> {
        await (await this.nameField).waitForDisplayed();
        await (await this.nameField).setValue(name);
    }

    async enterId(id: string): Promise<void> {
        await (await this.idField).waitForDisplayed();
        await (await this.idField).click();
        await (await this.idField).setValue(id);
    }

    async enterTag(tag: string): Promise<void> {
        await this.clickOnTag();
        await (await this.tagField).$('<input />').waitForDisplayed();
        await (await this.tagField).$('<input />').setValue(tag);
    }

    async clickOnTag(): Promise<void> {
        await (await this.tagField).click();
    }

    async clickOnCreateNewTag(): Promise<void> {
        await (await this.createNewTag).click();
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
        await (await this.stateCountryCityDropdowns)[0].waitForEnabled();
        await (await this.stateCountryCityDropdowns)[0].click();
    }

    async clickOnCountryField(): Promise<void> {
        await (await this.stateCountryCityDropdowns)[0].waitForEnabled();
        await (await this.stateCountryCityDropdowns)[0].click();
    }

    async clickOnCityField(): Promise<void> {
        await (await this.stateCountryCityDropdowns)[0].waitForEnabled();
        await (await this.stateCountryCityDropdowns)[0].click();
    }

    async enterZipCode(code: number): Promise<void> {
        await (await this.zipCodeField).waitForDisplayed();
        await (await this.zipCodeField).setValue(code);
    }

    async chooseRandomElement(): Promise<void> {
        await (await this.dropdownElements)[0].waitForEnabled();
        const randomIndex = Math.floor(Math.random() * (await this.dropdownElements).length);
        await (await this.dropdownElements)[randomIndex].click();
    }

    async clickDiscard(): Promise<void> {
        await (await this.discardButton).waitForEnabled();
        await (await this.discardButton).click();
    }
}
