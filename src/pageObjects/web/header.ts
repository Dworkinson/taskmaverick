import {BasePage} from "src/pageObjects/web/base.page";

export class Header extends BasePage {
    async clickOnDashboardButton(): Promise<void> {
        await this.browser.pause();
        const dashboard = this.browser.$('[href="/dashboards"]');
        await dashboard.waitForClickable();
        await dashboard.click();
    }

    async clickOnOverviewButton(): Promise<void> {
        await this.browser.pause();
        const overview = this.browser.$('[href="/overview"]');
        await overview.waitForClickable();
        await overview.click();
    }

    async clickOnLibraryButton(): Promise<void> {
        await this.browser.pause();
        const library = this.browser.$('[href="/library"]');
        await library.waitForClickable();
        await library.click();
    }

    async clickOnLocationsButton(): Promise<void> {
        await this.browser.pause();
        const location = this.browser.$('[href="/locations"]');
        await location.waitForClickable();
        await location.click();
    }

    async clickOnPeopleButton(): Promise<void> {
        await this.browser.pause();
        const people = this.browser.$('[href="/people"]');
        await people.waitForClickable();
        await people.click();
    }

    async clickOnDepartmentButton(): Promise<void> {
        const department = this.browser.$('[href="/departments"]');
        await department.waitForClickable();
        await department.click();
    }

    async clickOnGroupButton(): Promise<void> {
        await this.browser.pause();
        const group = this.browser.$('[href="/groups"]');
        await group.waitForClickable();
        await group.click();
    }

    async clickOnReportingButton(): Promise<void> {
        await this.browser.pause();
        const reporting = this.browser.$('[href="/reporting"]');
        await reporting.waitForClickable();
        await reporting.click();
    }

    async clickOnTimeButton(): Promise<void> {
        await this.browser.pause();
        const time = this.browser.$('[href="/time"]');
        await time.waitForClickable();
        await time.click();
    }

    async clickOnNotificationsButton(): Promise<void> {
        const notifications = this.browser.$('[class*="notifications"]');
        await notifications.waitForClickable();
        await notifications.click();
    }

    async clickOnUserAvatarButton(): Promise<void> {
        const userAvatar = this.browser.$('[class*="user-avatar"]');
        await userAvatar.waitForClickable();
        await userAvatar.click();
    }

    async clickOnAccountInfoButton(): Promise<void> {
        const accountInfo = this.browser.$('[href="/account-info"]');
        await accountInfo.waitForClickable();
        await accountInfo.click();
    }

    async clickOnSignOutButton(): Promise<void> {
        const singOut = this.browser.$('//*[contains(text(), "Sign Out")]');
        await singOut.waitForClickable();
        await singOut.click();
    }
}
