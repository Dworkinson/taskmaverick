import {creds} from "../../creds";

import * as pages from "src/pageObjects/web/allPages";
import * as screens from "src/pageObjects/android/allScreens";

describe('Should start chrome web app + android app', async () => {
    it('apps starting', async () => {
        const chrome = await browser["chrome"];
        const android = await browser["android"];

        await chrome.url('https://test-org.qa-auto.taskmaverick-feature.com/');
    });

    it('App show right location', async () => {
        const locationName = 'Test Location';

        const webLogin = new pages.LoginPage(browser["chrome"]);
        const webHeader = new pages.Header(browser["chrome"]);
        const webLocations = new pages.LocationPage(browser["chrome"]);

        const appLogin = new screens.LoginScreen(browser["android"]);
        const appLoginSecond = new screens.LoginSecondScreen(browser["android"]);
        const appDashboard = new screens.DashboardScreen(browser["android"]);
        const appLocation = new screens.CheckCreatedLocation(browser["android"], locationName);

        await webLogin.open();
        await webLogin.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await webHeader.clickOnLocationsButton();
        await webLocations.clickOnCreateNewLocation();

        await webLocations.createLocationComponent.enterName(locationName);
        await webLocations.createLocationComponent.enterId('L002');
        await webLocations.createLocationComponent.enterAddress('Street');

        await webLocations.createLocationComponent.clickOnStateField();
        await webLocations.createLocationComponent.chooseRandomElement();

        await webLocations.createLocationComponent.clickOnCountryField();
        await webLocations.createLocationComponent.chooseRandomElement();

        await webLocations.createLocationComponent.clickOnCityField();
        await webLocations.createLocationComponent.chooseRandomElement();

        await webLocations.createLocationComponent.enterZipCode(11111);

        await webLocations.createLocationComponent.clickOnSave();
        //TODO create activate location methods

        await appLogin.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await appLoginSecond.clickOnPersonalLogin();
        await appLoginSecond.settingCode.enterCode(creds.MOBILE_ADMIN_PERSONAL_CODE);
        await appDashboard.clickOnLocations();
        await appLocation.clickOnLocation();
    });
});
