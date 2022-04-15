import {BasePage} from "src/pageObjects/web/base.page";

export class LoginPage extends BasePage{
    async open(): Promise<void> {
        await this.browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
    }

    async enterEmail(email: string): Promise<void> {
        const emailForm = this.browser.$('[type="email"]');
        await emailForm.waitForDisplayed();
        await emailForm.setValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        const passwordForm = this.browser.$('[type="password"]');
        await passwordForm.waitForDisplayed();
        await passwordForm.setValue(password);
    }

    async clickOnSignInButton(): Promise<void> {
        const signIn = this.browser.$('[name="button"]');
        await signIn.waitForClickable();
        await signIn.click();
    }

    async logIn(email: string, password: string): Promise<void> {
        await (await this.enterEmail(email));
        await (await this.enterPassword(password));
        await (await this.clickOnSignInButton());
    }
}
