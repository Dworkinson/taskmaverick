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

        await webLocations.createLocationComponent.clickOnStateField();
        await webLocations.createLocationComponent.chooseRandomElement();
        await webLocations.createLocationComponent.clickOnCountryField();
        await webLocations.createLocationComponent.chooseRandomElement();
        await webLocations.createLocationComponent.clickOnCityField();
        await webLocations.createLocationComponent.chooseRandomElement();

        await webLocations.createLocationComponent.enterName('Test Location');
        await webLocations.createLocationComponent.enterId('L002');
        await webLocations.createLocationComponent.enterTag('AutoTag');
        await webLocations.createLocationComponent.clickOnCreateNewTag();
        await webLocations.createLocationComponent.enterAddress('Private Drive street');
        await webLocations.createLocationComponent.enterZipCode(11111);
        await webLocations.createLocationComponent.clickOnSave();

        await webLocations.createLocationComponent.clickOnPeopleInLocation();
        await webLocations.createLocationComponent.addUser('Admin Admin');
        await webLocations.createLocationComponent.clickOnSave();

        await webLocations.createLocationComponent.clickOnPeopleInDepartment();
        await webLocations.createLocationComponent.addDepartment('AutoDepartment');
        await webLocations.createLocationComponent.clickOnAddedDepartment();
        await webLocations.createLocationComponent.addUser('Admin Admin');
        await webLocations.createLocationComponent.clickOnSave();

        await webLocations.createLocationComponent.clickOnPeopleInLocationGroup();
        await webLocations.createLocationComponent.addUser('Admin Admin');
        await webLocations.createLocationComponent.clickOnSave();

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
