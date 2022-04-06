export class Header {
    private get dashboardButton(): Promise<WebdriverIO.Element> {
        return $('[href="/dashboards"]');
    }

    private get overviewButton(): Promise<WebdriverIO.Element> {
        return $('[href="/overview"]');
    }

    private get libraryButton(): Promise<WebdriverIO.Element> {
        return $('[href="/library"]');
    }

    private get locationButton(): Promise<WebdriverIO.Element> {
        return $('[href="/locations"]');
    }

    private get peopleButton(): Promise<WebdriverIO.Element> {
        return $('[href="/people"]');
    }

    private get departmentButton(): Promise<WebdriverIO.Element> {
        return $('[href="/departments"]');
    }

    private get groupButton(): Promise<WebdriverIO.Element> {
        return $('[href="/groups"]');
    }

    private get reportingButton(): Promise<WebdriverIO.Element> {
        return $('[href="/reporting"]');
    }

    private get timeButton(): Promise<WebdriverIO.Element> {
        return $('[href="/time"]');
    }

    private get notificationsButton(): Promise<WebdriverIO.Element> {
        return $('[class*="notifications"]');
    }

    private get settingsButton(): Promise<WebdriverIO.Element> {
        return $('[class*="settings"]');
    }

    private get userAvatarButton(): Promise<WebdriverIO.Element> {
        return $('[class*="user-avatar"]');
    }

    private get accountInfoButton(): Promise<WebdriverIO.Element> {
        return $('[href="/account-info"]');
    }

    private get signOutButton(): Promise<WebdriverIO.Element> {
        return $('=Sign Out');
    }

    async clickOnDashboardButton(): Promise<void> {
        await (await this.dashboardButton).waitForClickable();
        await (await this.dashboardButton).click();
    }

    async clickOnOverviewButton(): Promise<void> {
        await (await this.overviewButton).waitForClickable();
        await (await this.overviewButton).click();
    }

    async clickOnLibraryButton(): Promise<void> {
        await (await this.libraryButton).waitForClickable();
        await (await this.libraryButton).click();
    }

    async clickOnLocationsButton(): Promise<void> {
        await (await this.locationButton).waitForClickable();
        await (await this.locationButton).click();
    }

    async clickOnPeopleButton(): Promise<void> {
        await (await this.peopleButton).waitForClickable();
        await (await this.peopleButton).click();
    }

    async clickOnDepartmentButton(): Promise<void> {
        await (await this.departmentButton).waitForClickable();
        await (await this.departmentButton).click();
    }

    async clickOnGroupButton(): Promise<void> {
        await (await this.groupButton).waitForClickable();
        await (await this.groupButton).click();
    }

    async clickOnReportingButton(): Promise<void> {
        await (await this.reportingButton).waitForClickable();
        await (await this.reportingButton).click();
    }

    async clickOnTimeButton(): Promise<void> {
        await (await this.timeButton).waitForClickable();
        await (await this.timeButton).click();
    }

    async clickOnNotificationsButton(): Promise<void> {
        await (await this.notificationsButton).waitForClickable();
        await (await this.notificationsButton).click();
    }

    async clickOnUserAvatarButton(): Promise<void> {
        await (await this.userAvatarButton).waitForClickable();
        await (await this.userAvatarButton).click();
    }

    async clickOnAccountInfoButton(): Promise<void> {
        await (await this.accountInfoButton).waitForClickable();
        await (await this.accountInfoButton).click();
    }

    async clickOnSignOutButton(): Promise<void> {
        await (await this.signOutButton).waitForClickable();
        await (await this.signOutButton).click();
    }
}
