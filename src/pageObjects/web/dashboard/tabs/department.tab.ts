import {BasePage} from "../../base.page";
import {ChoosePeriodComponent} from "./choosePeriod.component";

export class DepartmentTab extends BasePage {
    choosePeriod: ChoosePeriodComponent;
    constructor(browser: WebdriverIO.Browser, choosePeriod = new ChoosePeriodComponent(browser)) {
        super(browser);
        this.choosePeriod = choosePeriod;
    }

    private async chooseElement(val: string): Promise<void> {
        const inputField = this.browser.$('//*[@placeholder="Search by keyword"]');
        await inputField.waitForDisplayed();
        await inputField.click();
        await inputField.setValue(val);

        const elem = this.browser.$(`//*[contains(@class, "pick-item")]/*[contains(text(), "${val}")]`);
        await elem.waitForDisplayed();
        await elem.click();
    }

    async chooseDepartment(departmentName: string): Promise<void> {
        const chooseDepartmentBtn = this.browser.$('[displayedparam="name"]]');
        await chooseDepartmentBtn.waitForClickable();
        await chooseDepartmentBtn.click();

        await this.chooseElement(departmentName);
    }

    async chooseLocation(locationName: string): Promise<void> {
        const chooseLocationBtn = this.browser.$('[displayedparam="locationName"]');
        await chooseLocationBtn.waitForClickable();
        await chooseLocationBtn.click();

        await this.chooseElement(locationName);
    }
}
