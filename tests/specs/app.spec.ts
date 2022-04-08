import * as screens from "src/pageObjects/android/allScreens";

import {creds} from "../../creds";

const fs = require('fs');

describe('Login android app using valid email/password', async () => {
    it('android app loaded', async () => {
        const login = new screens.LoginScreen(browser);
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
    });

    it.only('debugging', async () => {
        const login = new screens.LoginScreen(browser);
        const loginSecond = new screens.LoginSecondScreen(browser);
        const dashboard = new screens.DashboardScreen(browser);
        const location = new screens.CheckCreatedLocation(browser, 'AutoLocation');

        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await loginSecond.clickOnPersonalLogin();
        await loginSecond.settingCode.enterCode(creds.MOBILE_ADMIN_PERSONAL_CODE);
        await dashboard.clickOnLocations();
        await location.clickOnLocation();
        await browser.pause(15000);
        // const source = (await browser.getPageSource());
        // //
        // fs.writeFileSync('./pageSource/locationsList.txt', source);
    });
});
