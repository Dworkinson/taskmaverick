import {BaseScreen} from "../base.screen";
import {SettingCodeScreen} from "src/pageObjects/android/login/settingCode.screen";

export class LoginSecondScreen extends BaseScreen {
    settingCode: SettingCodeScreen;
    constructor(browser: WebdriverIO.Browser, settingCode = new SettingCodeScreen(browser)) {
        super(browser);
        this.settingCode = settingCode;
    }

    private get locationLogin(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Location');
    }

    private get personalLogin(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Personal');
    }

    private get remindPersonalCode(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Remind Personal Code');
    }

    private get yesButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('YES', 'text');
    }

    private get noButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('NO', 'text');
    }

    async clickOnLocationLogin(): Promise<void> {
        await (await this.locationLogin).waitForEnabled();
        await (await this.locationLogin).click();
    }

    async clickOnPersonalLogin(): Promise<void> {
        await (await this.personalLogin).waitForEnabled();
        await (await this.personalLogin).click();
    }

    async clickOnRemindPersonalCode(): Promise<void> {
        await (await this.personalLogin).waitForEnabled();
        await (await this.remindPersonalCode).click();
    }

    async clickYes(): Promise<void> {
        await (await this.yesButton).waitForEnabled();
        await (await this.yesButton).click();
    }

    async clickNo(): Promise<void> {
        await (await this.noButton).waitForEnabled();
        await (await this.noButton).click();
    }
}
