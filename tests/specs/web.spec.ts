import {expect} from 'chai';
import {creds} from "../../creds";

import * as pages from "src/pageObjects/web/allPages";

describe('Single mode for web app', async () => {
    it('web app loaded', async () => {
        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await header.clickOnUserAvatarButton();
        await header.clickOnSignOutButton();
    });

    it(' creating new location debugging (create + delete location)', async () => {
        const locationName = 'Test Location';

        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        const locations = new pages.LocationPage(browser);
        const createdLocation = new pages.CheckCreatedLocation(browser, locationName);

        await login.open();
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);

        await header.clickOnLocationsButton();
        await locations.clickOnCreateNewLocation();

        await locations.createLocation.clickOnStateField();
        await locations.createLocation.chooseRandomElement();
        await locations.createLocation.clickOnCountryField();
        await locations.createLocation.chooseRandomElement();
        await locations.createLocation.clickOnCityField();
        await locations.createLocation.chooseRandomElement();

        await locations.createLocation.enterName(locationName);
        await locations.createLocation.enterId('L002');
        await locations.createLocation.enterTag('AutoTag');
        await locations.createLocation.clickOnCreateNewTag();
        await locations.createLocation.enterAddress('Private Drive street');
        await locations.createLocation.enterZipCode(11111);
        await locations.createLocation.clickOnSave();

        await locations.createLocation.clickOnPeopleInLocation();
        await locations.createLocation.addUser('Admin Admin');
        await locations.createLocation.clickOnSave();

        await locations.createLocation.clickOnPeopleInDepartment();
        await locations.createLocation.addDepartment('AutoDepartment');
        await locations.createLocation.clickOnAddedDepartment();
        await locations.createLocation.addUser('Admin Admin');
        await locations.createLocation.clickOnSave();

        await locations.createLocation.clickOnPeopleInLocationGroup();
        await locations.createLocation.addUser('Admin Admin');
        await locations.createLocation.clickOnSave();

        await header.clickOnLocationsButton();
        await createdLocation.clickOnLocation();
        const locationCode = await locations.locationInfo.getLocationContent('Location Code');

        await locations.locationInfo.clickOnActionsButton();
        await locations.locationInfo.clickOnDeactivateButton();
        await locations.locationInfo.clickOnConfirmButton();

        await createdLocation.clickOnLocation();
        await locations.locationInfo.clickOnActionsButton();
        await locations.locationInfo.clickOnDeleteButton();
        await locations.locationInfo.clickOnConfirmButton();

        console.log('===============');
        console.log(locationCode);
        console.log('===============');

        await browser.pause(5000);
    });
});
