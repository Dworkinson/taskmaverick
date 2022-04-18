import {BasePage} from "../../base.page";

export class ExecutionTab extends BasePage {
    private get buttons(): Promise<WebdriverIO.ElementArray> {
        return this.browser.$$('[role="button"][class*="btn"]');
    }

    async chooseItemByName(val: string) {
        const inputField = this.browser.$('//*[contains(@class, "targetInput")]');
        await inputField.waitForDisplayed();
        await inputField.setValue(val);

        const item = this.browser.$(`//*[contains(text(), "${val}")]`);
        await item.waitForClickable();
        await item.click();
    }

    async chooseLocation(locationName: string): Promise<void> {
        await this.browser.pause();
        const locationBtn = (await this.buttons)[0];
        await locationBtn.waitForClickable();
        await locationBtn.click();

        await this.chooseItemByName(locationName);
    }

    async chooseTeam(team: string): Promise<void> {
        await this.browser.pause();
        const teamBtn = (await this.buttons)[1];
        await teamBtn.waitForClickable();
        await teamBtn.click();

        await this.chooseItemByName(team);
    }

    async choosePeople(userName: string): Promise<void> {
        await this.browser.pause();
        const peopleBtn = (await this.buttons)[2];
        await peopleBtn.waitForClickable();
        await peopleBtn.click();

        await this.chooseItemByName(userName);
    }

    async chooseMission(mission: string): Promise<void> {
        await this.browser.pause();
        const missionBtn = (await this.buttons)[3];
        await missionBtn.waitForClickable();
        await missionBtn.click();

        await this.chooseItemByName(mission);
    }

    // Use Array<number> a.g. [year, month, day]
    async chooseTriggeredDate(firstDate: Array<number>, secondDate: Array<number> = firstDate): Promise<void> {
        await this.browser.pause();
        const triggeredDateBtn = (await this.buttons)[4];
        await triggeredDateBtn.waitForClickable();
        await triggeredDateBtn.click();

        const monthName = this.browser.$('[class*="month-name"]');
        const previousMonth = this.browser.$('[aria-label="Previous month"]');
        const nextMonth = this.browser.$('[aria-label="Next month"]');
        const applyBtn = this.browser.$('//button[contains(@class, "primary")]');

        await chooseDate.call(this, firstDate);
        await chooseDate.call(this, secondDate);
        await applyBtn.waitForClickable();
        await applyBtn.click();

        async function chooseDate (date: Array<number>) {
            await (await monthName).waitForDisplayed();
            let currDate = new Date(await monthName.getText());
            const neededDate = new Date(date[0], date[1]);

            while (neededDate < currDate) {
                await previousMonth.waitForClickable();
                await previousMonth.click();
                currDate = new Date(await monthName.getText());
            }
            while (neededDate > currDate ) {
                await nextMonth.waitForClickable();
                await nextMonth.click();
                currDate = new Date(await (await monthName).getText());
            }
            const nDay = this.browser.$(`//*[contains(@class, "custom-day")][text()=" ${date[2]} "]`);
            await nDay.waitForClickable();
            await nDay.click();
        }
    }

    async groupByPerson(): Promise<void> {
        await this.browser.pause();
        const groupByBtn = (await this.buttons)[5];
        await groupByBtn.waitForClickable();
        await groupByBtn.click();

        const personBtn = this.browser.$('//*[contains(@class, "group-container")]/div[1]');
        await personBtn.waitForClickable();
        await personBtn.click();
    }

    async groupByMission(): Promise<void> {
        await this.browser.pause();
        const groupByBtn = (await this.buttons)[5];
        await groupByBtn.waitForClickable();
        await groupByBtn.click();

        const missionBtn = this.browser.$('//*[contains(@class, "group-container")]/div[2]');
        await missionBtn.waitForClickable();
        await missionBtn.click();
    }

    async enableAutoRefresh(): Promise<void> {
        const onBtn = this.browser.$('[id="mat-checkbox-1"]');
        await onBtn.waitForClickable();
        await onBtn.click();
    }

    async disableAutoRefresh(): Promise<void> {
        const offBtn = this.browser.$('[id="mat-checkbox-2"]');
        await offBtn.waitForClickable();
        await offBtn.click();
    }
}
