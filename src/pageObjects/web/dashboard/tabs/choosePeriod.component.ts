import {BasePage} from "../../base.page";

export class ChoosePeriodComponent extends BasePage {
    async choose1WPeriod(): Promise<void> {
        const _1w = this.browser.$('//*[contains(text(), "1W")]');
        await _1w.waitForClickable();
        await _1w.click();
    }

    async choose4WPeriod(): Promise<void> {
        const _4w = this.browser.$('//*[contains(text(), "4W")]');
        await _4w.waitForClickable();
        await _4w.click();
    }

    async choose12WPeriod(): Promise<void> {
        const _12w = this.browser.$('//*[contains(text(), "12W")]');
        await _12w.waitForClickable();
        await _12w.click();
    }

    async choose52WPeriod(): Promise<void> {
        const _52w = this.browser.$('//*[contains(text(), "52W")]');
        await _52w.waitForClickable();
        await _52w.click();
    }

    async chooseAllPeriod(): Promise<void> {
        const all = this.browser.$('//*[contains(text(), "All")]');
        await all.waitForClickable();
        await all.click();
    }
}
