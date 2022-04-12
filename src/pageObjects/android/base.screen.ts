const BACK_BUTTON = 4;

export class BaseScreen {
    _browser: WebdriverIO.Browser;

    constructor(browser: WebdriverIO.Browser) {
        this._browser = browser;
    }

    get browser() : WebdriverIO.Browser {
        return this._browser;
    }

    private _buildSelector(text: string, method: string = 'textContains', ...args): string {
        return `new UiSelector().${method}("${text}")${args}`
    }

    /**
     * @param containsText - text on a selector.
     * @param method - UiSelector's method (textContains by default). For more information see https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
     */
    buildSelector(containsText: string, method: string = 'textContains'): Promise<WebdriverIO.Element> {
        return this.browser.$(`android=${this._buildSelector(`${containsText}`, method)}`);
    }

    async clickOnBackButton(): Promise<void> {
        browser.pressKeyCode(BACK_BUTTON);
    }
}
