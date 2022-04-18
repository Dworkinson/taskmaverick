import {BasePage} from "../../base.page";

export class AgingTab extends BasePage {
    async clickOnLocation(): Promise<void> {
        const location = this.browser.$('[href="/dashboards/aging/location"]');
        await location.waitForClickable();
        await location.click();
    }

    async clickOnGroup(): Promise<void> {
        const group = this.browser.$('href="/dashboards/aging/group"');
        await group.waitForClickable();
        await group.click();
    }

    async chooseLocation(locationName: string): Promise<void> {
        const chooseLocationBtn = this.browser.$('//button[contains(@class, "instant-filter")]');
        await chooseLocationBtn.waitForClickable();
        await chooseLocationBtn.click();

        const inputField = this.browser.$('//*[contains(@class, "targetInput")]');
        await inputField.waitForDisplayed();
        await inputField.setValue(locationName);

        const location = this.browser.$(`//*[contains(text(), "${locationName}")]`);
        await location.waitForClickable();
        await location.click();
    }

    async chooseDate(year: number, month: number, day: number): Promise<void> {
        const dateBtn = this.browser.$('//button[contains(@class, "aging-header")]');
        await dateBtn.waitForClickable();
        await dateBtn.click();

        const monthName = this.browser.$('[class*="month-name"]');
        const previousMonth = this.browser.$('[aria-label="Previous month"]');
        const nextMonth = this.browser.$('[aria-label="Next month"]');

        await monthName.waitForDisplayed();

        let currDate = new Date(await monthName.getText());
        const neededDate = new Date(year, month);

        while (neededDate < currDate) {
            await previousMonth.waitForClickable();
            await previousMonth.click();
            currDate = new Date(await monthName.getText());
        }
        while (neededDate > currDate ) {
            await nextMonth.waitForClickable();
            await nextMonth.click();
            currDate = new Date(await monthName.getText());
        }

        const nDay = this.browser.$(`//*[contains(@class, "custom-day")][text()=" ${day} "]`);
        await nDay.waitForClickable();
        await nDay.click();
    }
}
