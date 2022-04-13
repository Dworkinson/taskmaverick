import {BasePage} from "../base.page";
import {CreateLocationComponent} from "./createLocation.component";
import {LocationInfoComponent} from "src/pageObjects/web/locations/locationInfo.component";

export class LocationPage extends BasePage {
    createLocationComponent: CreateLocationComponent;
    locationInfo: LocationInfoComponent;
    constructor(
        browser: WebdriverIO.Browser,
        createLocationComponent = new CreateLocationComponent(browser),
        locationInfo = new LocationInfoComponent(browser)
    ) {
        super(browser);
        this.createLocationComponent = createLocationComponent;
        this.locationInfo = locationInfo;
    }

    private get groupBy(): Promise<WebdriverIO.Element> {
        return this.browser.$('[class*="border-bottom"] [class="dropdown-toggle"]');
    }

    private get groupByExpandAll(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Expand All');
    }

    private get groupByCollapseAll(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Collapse All');
    }

    private get groupByLocation(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Location');
    }

    private get groupByDepartment(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Department');
    }

    private get createNewLocation(): Promise<WebdriverIO.Element> {
        return this.browser.$('[href="/locations/view/new"]');
    }

    private get expandCollapse(): Promise<WebdriverIO.Element> {
        return this.browser.$('*=Expand/Collapse');
    }

    private get export(): Promise<WebdriverIO.Element> {
        return this.browser.$('=Export');
    }

    async clickOnGroupBy(): Promise<void> {
        await (await this.groupBy).waitForClickable();
        await (await this.groupBy).click();
    }

    async clickOnGroupByExpandAll(): Promise<void> {
        await (await this.groupByExpandAll).waitForClickable();
        await (await this.groupByExpandAll).click();
    }

    async clickOnGroupByLocation(): Promise<void> {
        await (await this.groupByLocation).waitForClickable();
        await (await this.groupByLocation).click();
    }

    async clickOnGroupByDepartment(): Promise<void> {
        await (await this.groupByDepartment).waitForClickable();
        await (await this.groupByDepartment).click();
    }

    async clickOnCreateNewLocation(): Promise<void> {
        await (await this.createNewLocation).waitForClickable();
        await (await this.createNewLocation).click();
    }

    async clickOnExpandCollapse(): Promise<void> {
        await (await this.expandCollapse).waitForClickable();
        await (await this.expandCollapse).click();
    }

    async clickOnExport(): Promise<void> {
        await (await this.export).waitForClickable();
        await (await this.export).click();
    }
}
