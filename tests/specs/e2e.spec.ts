import {creds} from "../../creds";
import {LoginScreen} from "src/pageObjects/android/login/login.screen";

import * as pages from "src/pageObjects/web/allPages";


describe('Should start chrome web app + android app', async () => {
    it('apps starting', async () => {
        const chrome = await browser["chrome"];
        const android = await browser["android"];

        await chrome.url('https://test-org.qa-auto.taskmaverick-feature.com/');
    });

    it.only('App show write location', async () => {
        const webLogin = new pages.LoginPage(browser["chrome"]);
        const webLocations = new pages.LocationPage(browser["chrome"]);
        const header = new pages.Header(browser["chrome"]);
        const appLogin = new LoginScreen(browser["android"]);

        await webLogin.open();
        await webLogin.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);

        await header.clickOnUserAvatarButton();
        await header.clickOnSignOutButton();
        await browser.pause(5000);
        // await appLogin.logIn(creds.email, creds.password);
    });
});
