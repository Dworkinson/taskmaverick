import {BasePage} from "../base.page";

export class CreateLocationComponent extends BasePage {
    async clickOnPeopleInLocation(): Promise<void> {
        await this.browser.pause();
        const peopleInLocation = this.browser.$$('[class="border-bottom"] [class="d-flex"] [class*="step d-flex"]')[1];
        await peopleInLocation.waitForDisplayed();
        await peopleInLocation.click();
    }

    async clickOnPeopleInDepartment(): Promise<void> {
        await this.browser.pause();
        const peopleInLocation = this.browser.$$('[class="border-bottom"] [class="d-flex"] [class*="step d-flex"]')[2];
        await peopleInLocation.waitForDisplayed();
        await peopleInLocation.click();
    }

    async clickOnPeopleInLocationGroup(): Promise<void> {
        await this.browser.pause();
        const peopleInLocation = this.browser.$$('[class="border-bottom"] [class="d-flex"] [class*="step d-flex"]')[3];
        await peopleInLocation.waitForDisplayed();
        await peopleInLocation.click();
    }

    async clickOnSave(): Promise<void> {
        await this.browser.pause();
        const saveButton = this.browser.$('[class*="btn-primary"]');
        await saveButton.waitForClickable();
        await saveButton.click();
        await this.browser.pause();
    }

    async clickOnClose(): Promise<void> {
        const closeButton = this.browser.$('[class*="btn-secondary"]');
        await closeButton.waitForClickable();
        await closeButton.click();
    }

    async enterName(name: string): Promise<void> {
        const nameField = this.browser.$('[formcontrolname="name"]');
        await nameField.waitForDisplayed();
        await nameField.setValue(name);
    }

    async enterId(id: string): Promise<void> {
        const idField = this.browser.$('[formcontrolname="locationId"]');
        await idField.waitForDisplayed();
        await idField.click();
        await idField.setValue(id);
    }

    async enterTag(tag: string): Promise<void> {
        const tagField = this.browser.$('[formcontrolname="tags"]');
        await tagField.waitForClickable();
        await tagField.click();
        await tagField.$('<input />').waitForDisplayed();
        await tagField.$('<input />').setValue(tag);
    }

    async clickOnCreateNewTag(): Promise<void> {
        const createNewTag = this.browser.$('[class*=new-tag]');
        await createNewTag.waitForClickable();
        await createNewTag.click();
    }

    async enterAddress(address: string): Promise<void> {
        const addressField = this.browser.$('[placeholder*="Street"]');
        await addressField.waitForDisplayed();
        await addressField.setValue(address);
    }

    async enterAddress2(address: string): Promise<void> {
        const addressField = this.browser.$('[placeholder*="Address"]');
        await addressField.waitForDisplayed();
        await addressField.setValue(address);
    }

    async clickOnStateField(): Promise<void> {
        const stateDropdown = this.browser.$$('[class="placeholder"]')[0];
        await stateDropdown.waitForClickable();
        await stateDropdown.click();
    }

    async clickOnCountryField(): Promise<void> {
        const stateDropdown = this.browser.$$('[class="placeholder"]')[0];
        await stateDropdown.waitForClickable();
        await stateDropdown.click();
    }

    async clickOnCityField(): Promise<void> {
        const stateDropdown = this.browser.$$('[class="placeholder"]')[0];
        await stateDropdown.waitForClickable();
        await stateDropdown.click();
    }

    async chooseRandomElement(): Promise<void> {
        const dropdownElements = this.browser.$$('[class*="active"] [class*=dropdown-option]');
        await dropdownElements[0].waitForEnabled();
        const randomIndex = Math.floor(Math.random() * (await dropdownElements).length);
        await (await dropdownElements)[randomIndex].click();
    }

    async enterZipCode(code: number): Promise<void> {
        const zipCode = this.browser.$('[placeholder="ZIP"]');
        await zipCode.waitForDisplayed();
        await zipCode.setValue(code);
    }

    async clickDiscard(): Promise<void> {
        const discardButton = this.browser.$('[class="modal-dialog"] [class="btn btn-danger"]');
        await discardButton.waitForDisplayed();
        await discardButton.click();
    }

    async addUser(userName: string): Promise<void> {
        const user = this.browser.$(`//*[contains(@class, 'items')]/*[contains(text(), '${userName}')]/../*[contains(@class, 'checkbox')]`);
        await user.waitForClickable();
        await user.click();
    }

    async addDepartment(departmentName: string): Promise<void> {
        const addDepartment = await this.browser.$('[role="button"]');
        await addDepartment.click();

        const department = await this.browser.$(`//*[contains(@class, 'dropdown')]/*[contains(text(), '${departmentName}')]`);
        await department.click();
    }

    async clickOnAddedDepartment(): Promise<void> {
        const department = await this.browser.$('//*[contains(@class, "selectable")]/tbody');
        await department.waitForDisplayed();
        await department.click();
    }
}
