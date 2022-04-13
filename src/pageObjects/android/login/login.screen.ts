import {BaseScreen} from "../base.screen";
import {SettingCodeScreen} from "src/pageObjects/android/login/settingCode.screen";

export class LoginScreen extends BaseScreen {
    private get emailForm(): Promise<WebdriverIO.Element> {
        return this.buildSelector('etloginEntry', 'description');
    }

    private get passwordForm(): Promise<WebdriverIO.Element> {
        return this.buildSelector('etPasswordEntry', 'description');
    }

    private get saveCredentialsCheckbox(): Promise<WebdriverIO.Element> {
        return this.buildSelector('storeCredentialsCheckboxImg', 'resourceIdMatches');
    }

    private get signInButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Sign in', 'text');
    }

    private get forgotPasswordButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Forgot Password', 'text');
    }

    private get wrongCredentialsAlertMessage(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Oops');
    }

    async enterEmail(email: string): Promise<void> {
        await (await this.emailForm).waitForDisplayed();
        await (await this.emailForm).addValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        await (await this.passwordForm).waitForDisplayed();
        await (await this.passwordForm).setValue(password);
    }

    async clickOnSaveCredentialsCheckbox(): Promise<void> {
        await (await this.saveCredentialsCheckbox).waitForClickable();
        await (await this.saveCredentialsCheckbox).click();
    }

    async clickOnSignInButton(): Promise<void> {
        await (await this.signInButton).waitForEnabled();
        await (await this.signInButton).click();
    }

    async clickOnForgotPasswordButton(): Promise<void> {
        await (await this.forgotPasswordButton).waitForClickable();
        await (await this.forgotPasswordButton).click();
    }

    async isWrongCredentialsAlertMessageDisplayed(): Promise<void> {
        await (await this.wrongCredentialsAlertMessage).isDisplayed();
    }

    async logIn(email: string, password: string): Promise<void> {
        await (await this.enterEmail(email));
        await (await this.enterPassword(password));
        await (await this.clickOnSignInButton());
    }
}
