export class BasePage {
    _browser: WebdriverIO.Browser;

    constructor(browser: WebdriverIO.Browser) {
        this._browser = browser;
    }

    get browser() : WebdriverIO.Browser {
        return this._browser;
    }
}
