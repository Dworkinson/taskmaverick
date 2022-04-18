import {BasePage} from "../base.page";
import {AgingTab} from "./tabs/aging.tab";
import {ExecutionTab} from "./tabs/execution.tab";
import {PersonalTab} from "./tabs/personal.tab";
import {DepartmentTab} from "src/pageObjects/web/dashboard/tabs/department.tab";

export class DashboardPage extends BasePage {
    agingTab: AgingTab;
    executionTab: ExecutionTab;
    department: DepartmentTab;
    personalTab: PersonalTab;

    constructor(
        browser: WebdriverIO.Browser,
        agingTab = new AgingTab(browser),
        executionTab = new ExecutionTab(browser),
        department = new DepartmentTab(browser),
        personalTab = new PersonalTab(browser)
    ) {
        super(browser);
        this.agingTab = agingTab;
        this.executionTab = executionTab;
        this.department = department;
        this.personalTab = personalTab;
    }

    async clickOnAgingDashboard(): Promise<void> {
        const agingDashboard = this.browser.$('[href="/dashboards/aging"]');
        await agingDashboard.waitForClickable();
        await agingDashboard.click();
    }

    async clickOnExecutionDashboard(): Promise<void> {
        const executionDashboard = this.browser.$('[href="/dashboards/execution"]');
        await executionDashboard.waitForClickable();
        await executionDashboard.click();
    }

    async clickOnPersonalDashboard(): Promise<void> {
        const personalDashboard = this.browser.$('[href="/dashboards/personal"]');
        await personalDashboard.waitForClickable();
        await personalDashboard.click();
    }

    async clickOnDepartmentDashboard(): Promise<void> {
        const personalDashboard = this.browser.$('[href="/dashboards/department"]');
        await personalDashboard.waitForClickable();
        await personalDashboard.click();
    }

    async clickOnLocationDashboard(): Promise<void> {
        const locationDashboard = this.browser.$('[href="/dashboards/location"]');
        await locationDashboard.waitForClickable();
        await locationDashboard.click();
    }
}
