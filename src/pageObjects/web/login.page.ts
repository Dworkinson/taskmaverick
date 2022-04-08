import {BasePage} from "src/pageObjects/web/base.page";

export class LoginPage extends BasePage{
    async open(): Promise<void> {
        await this.browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
    }

    private get emailForm(): Promise<WebdriverIO.Element> {
        return this.browser.$('[type="email"]');
    }

    private get passwordForm(): Promise<WebdriverIO.Element> {
        return this.browser.$('[type="password"]');
    }

    private get signInButton(): Promise<WebdriverIO.Element> {
        return this.browser.$('[name="button"]');
    }

    async enterEmail(email: string): Promise<void> {
        await (await this.emailForm).waitForDisplayed();
        await (await this.emailForm).setValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        await (await this.passwordForm).waitForDisplayed();
        await (await this.passwordForm).setValue(password);
    }

    async isSignInButtonEnabled(): Promise<boolean> {
        await (await this.signInButton).waitForDisplayed();
        return (await this.signInButton).isEnabled();
    }

    async clickOnSignInButton(): Promise<void> {
        await (await this.signInButton).waitForClickable();
        await (await this.signInButton).click();
    }

    async logIn(email: string, password: string): Promise<void> {
        await (await this.enterEmail(email));
        await (await this.enterPassword(password));
        await (await this.clickOnSignInButton());
    }
}
