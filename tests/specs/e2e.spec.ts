import {creds} from "../../creds";

import * as pages from "src/pageObjects/web/allPages";
import * as screens from "src/pageObjects/android/allScreens";
import {expect} from "chai";

describe('e2e: ', async () => {
    it('App show right location', async () => {
        const locationName = 'Test Location';

        const webLogin = new pages.LoginPage(browser["chrome"]);
        const webHeader = new pages.Header(browser["chrome"]);
        const webLocations = new pages.LocationPage(browser["chrome"]);
        const webCreatedLocation = new pages.CheckCreatedLocation(browser["chrome"], locationName);

        const appLogin = new screens.LoginScreen(browser["android"]);
        const appLoginSecond = new screens.LoginSecondScreen(browser["android"]);
        const appDashboard = new screens.DashboardScreen(browser["android"]);

        await webLogin.open();
        await webLogin.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);

        await webHeader.clickOnLocationsButton();
        await webLocations.clickOnCreateNewLocation();

        await webLocations.createLocation.clickOnStateField();
        await webLocations.createLocation.chooseRandomElement();
        await webLocations.createLocation.clickOnCountryField();
        await webLocations.createLocation.chooseRandomElement();
        await webLocations.createLocation.clickOnCityField();
        await webLocations.createLocation.chooseRandomElement();

        await webLocations.createLocation.enterName('Test Location');
        await webLocations.createLocation.enterId('L002');
        await webLocations.createLocation.enterTag('AutoTag');
        await webLocations.createLocation.clickOnCreateNewTag();
        await webLocations.createLocation.enterAddress('Private Drive street');
        await webLocations.createLocation.enterZipCode(11111);
        await webLocations.createLocation.clickOnSave();

        await webLocations.createLocation.clickOnPeopleInLocation();
        await webLocations.createLocation.addUser('Admin Admin');
        await webLocations.createLocation.clickOnSave();

        await webLocations.createLocation.clickOnPeopleInDepartment();
        await webLocations.createLocation.addDepartment('AutoDepartment');
        await webLocations.createLocation.clickOnAddedDepartment();
        await webLocations.createLocation.addUser('Admin Admin');
        await webLocations.createLocation.clickOnSave();

        await webLocations.createLocation.clickOnPeopleInLocationGroup();
        await webLocations.createLocation.addUser('Admin Admin');
        await webLocations.createLocation.clickOnSave();

        await webHeader.clickOnLocationsButton();
        await webCreatedLocation.clickOnLocation();

        const locationCode = await webLocations.locationInfo.getLocationContent('Location Code');

        await appLogin.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await appLoginSecond.clickOnLocationLogin();
        await appLoginSecond.settingCode.enterCode(locationCode);
        await appLoginSecond.clickYes();

        await appDashboard.browser.waitUntil(
            async () => await expect(await appDashboard.getLocationName()).contains(locationName)
        );
    });
});
