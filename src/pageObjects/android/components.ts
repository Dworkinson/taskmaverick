const BACK_BUTTON = 4;

export class Components {
    private buildScrollable(text: string, method: string = 'textContains'): string {
        return `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().${method}("${text}"))`;
    }

    /**
     * @param containsText - text on a selector.
     * @param method - UiSelector's method (textContains by default). For more information see https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
     */
    buildSelector(containsText: string, method: string = 'textContains'): Promise<WebdriverIO.Element> {
        return $(`android=${this.buildScrollable(`${containsText}`, method)}`);
    }

    async clickOnBackButton(): Promise<void> {
        browser.pressKeyCode(BACK_BUTTON);
    }
}
