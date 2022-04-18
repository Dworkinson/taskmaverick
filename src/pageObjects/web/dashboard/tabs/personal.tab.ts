import {BasePage} from "../../base.page";
import {ChoosePeriodComponent} from "./choosePeriod.component";

export class PersonalTab extends BasePage {
    choosePeriod: ChoosePeriodComponent;
    constructor(browser: WebdriverIO.Browser, choosePeriod = new ChoosePeriodComponent(browser)) {
        super(browser);
        this.choosePeriod = choosePeriod;
    }

    async choosePerson(userName: string) {
        const choosePersonBtn = this.browser.$('//*[contains(text(), "Choose Person")]');
        await choosePersonBtn.waitForClickable();
        await choosePersonBtn.click();

        const inputField = this.browser.$('//*[contains(@class, "targetInput")]');
        await inputField.waitForDisplayed();
        await inputField.click();
        await inputField.setValue(userName);

        const user = this.browser.$(`//*[contains(@class, "pick-item")]/*[contains(text(), "${userName}")]`);
        await user.waitForClickable();
        await user.click();
    }
}
