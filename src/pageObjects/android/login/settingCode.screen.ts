import {BaseScreen} from "../base.screen";

export class SettingCodeScreen extends BaseScreen {
    private get _1(): Promise<WebdriverIO.Element> {
        return this.buildSelector('1', 'text');
    }

    private get _2(): Promise<WebdriverIO.Element> {
        return this.buildSelector('2', 'text');
    }

    private get _3(): Promise<WebdriverIO.Element> {
        return this.buildSelector('3', 'text');
    }

    private get _4(): Promise<WebdriverIO.Element> {
        return this.buildSelector('4', 'text');
    }

    private get _5(): Promise<WebdriverIO.Element> {
        return this.buildSelector('5', 'text');
    }

    private get _6(): Promise<WebdriverIO.Element> {
        return this.buildSelector('6', 'text');
    }

    private get _7(): Promise<WebdriverIO.Element> {
        return this.buildSelector('7', 'text');
    }


    private get _8(): Promise<WebdriverIO.Element> {
        return this.buildSelector('8', 'text');
    }

    private get _9(): Promise<WebdriverIO.Element> {
        return this.buildSelector('9', 'text');
    }

    private get _0(): Promise<WebdriverIO.Element> {
        return this.buildSelector('0', 'text');
    }

    private get deleteButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('.*btnDel.*', 'resourceIdMatches')
    }

    private get loginButton(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Log in', 'text');
    }

    private get wrongCodeAlertMessage(): Promise<WebdriverIO.Element> {
        return this.buildSelector('Oops!');
    }

    async clickDeleteButton(): Promise<void> {
        await (await this.deleteButton).click();
    }

    async clickLoginButton(): Promise<void> {
        await (await this.loginButton).click();
    }

    async clickNumber(num: string): Promise<void> {
        switch (num) {
            case('1'):
                await (await this._1).waitForEnabled();
                await (await this._1).click();
                break;
            case('2'):
                await (await this._2).waitForEnabled();
                await (await this._2).click();
                break;
            case('3'):
                await (await this._3).waitForEnabled();
                await (await this._3).click();
                break;
            case('4'):
                await (await this._4).waitForEnabled();
                await (await this._4).click();
                break;
            case('5'):
                await (await this._5).waitForEnabled();
                await (await this._5).click();
                break;
            case('6'):
                await (await this._6).waitForEnabled();
                await (await this._6).click();
                break;
            case('7'):
                await (await this._7).waitForEnabled();
                await (await this._7).click();
                break;
            case('8'):
                await (await this._8).waitForEnabled();
                await (await this._8).click();
                break;
            case('9'):
                await (await this._9).waitForEnabled();
                await (await this._9).click();
                break;
            case('0'):
                await (await this._0).waitForEnabled();
                await (await this._0).click();
                break;
        }
    }

    async enterCode(code: string): Promise<void> {
        for(let num of Array.from(code)) {
            await this.clickNumber(num);
        }
    }
}
