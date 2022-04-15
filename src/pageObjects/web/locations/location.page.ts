import {BasePage} from "../base.page";
import {CreateLocationComponent} from "./createLocation.component";
import {LocationInfoComponent} from "src/pageObjects/web/locations/locationInfo.component";

export class LocationPage extends BasePage {
    createLocation: CreateLocationComponent;
    locationInfo: LocationInfoComponent;
    constructor(
        browser: WebdriverIO.Browser,
        createLocationComponent = new CreateLocationComponent(browser),
        locationInfo = new LocationInfoComponent(browser)
    ) {
        super(browser);
        this.createLocation = createLocationComponent;
        this.locationInfo = locationInfo;
    }

    async clickOnGroupBy(): Promise<void> {
        const groupBy = this.browser.$('[class*="border-bottom"] [class="dropdown-toggle"]');
        await groupBy.waitForClickable();
        await groupBy.click();
    }

    async clickOnExpandAll(): Promise<void> {
        const groupByExpandAll = this.browser.$('//*[contains(text(), "Expand All")]');
        await groupByExpandAll.waitForClickable();
        await groupByExpandAll.click();
    }

    async clickOnCollapseAll(): Promise<void> {
        const groupByExpandAll = this.browser.$('//*[contains(text(), "Collapse All")]');
        await groupByExpandAll.waitForClickable();
        await groupByExpandAll.click();
    }

    async clickOnGroupByLocation(): Promise<void> {
        const groupByLocation = await this.browser.$('//*[contains(@class, "dropdown")][contains(text(), "Location")]');
        await groupByLocation.waitForClickable();
        await groupByLocation.click();
    }

    async clickOnGroupByDepartment(): Promise<void> {
        const groupByLocation = await this.browser.$('//*[contains(@class, "dropdown")][contains(text(), "Department")]');
        await groupByLocation.waitForClickable();
        await groupByLocation.click();
    }

    async clickOnCreateNewLocation(): Promise<void> {
        const createNewLocation = this.browser.$('[href="/locations/view/new"]');
        await createNewLocation.waitForClickable();
        await createNewLocation.click();
    }

    async clickOnExpandCollapse(): Promise<void> {
        const expandCollapse = this.browser.$('//*[contains(text(), "Expand/Collapse")]');
        await expandCollapse.waitForClickable();
        await expandCollapse.click();
    }

    async clickOnExport(): Promise<void> {
        const exportBtn = this.browser.$('//*[contains(text(), "Export")]');
        await exportBtn.waitForClickable();
        await exportBtn.click();
    }
}
