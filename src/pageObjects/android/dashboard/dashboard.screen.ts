import {BaseScreen} from "../base.screen";

export class DashboardScreen extends BaseScreen {
    private get board(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Board');
    }

    private get locations(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Locations');
    }

    private get groups(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Groups');
    }

    private get libraryView(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Library View');
    }

    private get scheduledMissions(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Scheduled');
    }

    private get notifications(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Notifications', 'text');
    }

    private get _1wStatistics(): Promise<WebdriverIO.Element> {
        return this.buildSelector('1W', 'text');
    }

    private get _4wStatistics(): Promise<WebdriverIO.Element> {
        return this.buildSelector('4W', 'text');
    }

    private get _12wStatistics(): Promise<WebdriverIO.Element> {
        return this.buildSelector('12W', 'text');
    }

    private get _52wStatistics(): Promise<WebdriverIO.Element> {
        return this.buildSelector('52W', 'text');
    }

    private get allStatistics(): Promise<WebdriverIO.Element> {
        return this.buildSelector('All', 'text');
    }

    private get title(): Promise<WebdriverIO.Element> {
        return this.buildSelector('.*tvTitle.*', 'resourceIdMatches');
    }

    async clickOnBoard(): Promise<void> {
        await (await this.board).waitForEnabled();
        await (await this.board).click();
    }

    async clickOnLocations(): Promise<void> {
        await (await this.locations).waitForEnabled();
        await (await this.locations).click();
    }

    async clickOnGroups(): Promise<void> {
        await (await this.groups).waitForEnabled();
        await (await this.groups).click();
    }

    async clickOnLibraryView(): Promise<void> {
        await (await this.libraryView).waitForEnabled();
        await (await this.libraryView).click();
    }

    async clickOnScheduledMissions(): Promise<void> {
        await (await this.scheduledMissions).waitForEnabled();
        await (await this.scheduledMissions).click();
    }

    async clickOn1wStatistics(): Promise<void> {
        await (await this._1wStatistics).waitForEnabled();
        await (await this._1wStatistics).click();
    }

    async clickOn4wStatistics(): Promise<void> {
        await (await this._4wStatistics).waitForEnabled();
        await (await this._4wStatistics).click();
    }

    async clickOn12wStatistics(): Promise<void> {
        await (await this._12wStatistics).waitForEnabled();
        await (await this._12wStatistics).click();
    }

    async clickOn52wStatistics(): Promise<void> {
        await (await this._52wStatistics).waitForEnabled();
        await (await this._52wStatistics).click();
    }

    async clickOnAllStatistics(): Promise<void> {
        await (await this.allStatistics).waitForEnabled();
        await (await this.allStatistics).click();
    }

    async getLocationName(): Promise<string> {
        await this.browser.pause();
        await (await this.title).waitForDisplayed();
        return (await this.title).getText();
    }
}
