import {expect} from 'chai';
import {creds} from "../../creds";

import * as pages from "src/pageObjects/web/allPages";

describe('Single mode for web app', async () => {
    it('web app loaded', async () => {
        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        expect(await login.isSignInButtonEnabled()).to.be.false;
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await header.clickOnUserAvatarButton();
        await header.clickOnSignOutButton();
    });

    it(' creating new location debugging', async () => {
        const locationName = 'Test Location';

        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        const locations = new pages.LocationPage(browser);
        const createdLocation = new pages.CheckCreatedLocation(browser, locationName);

        await login.open();
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);

        await header.clickOnLocationsButton();
        await locations.clickOnCreateNewLocation();

        await locations.createLocationComponent.clickOnStateField();
        await locations.createLocationComponent.chooseRandomElement();
        await locations.createLocationComponent.clickOnCountryField();
        await locations.createLocationComponent.chooseRandomElement();
        await locations.createLocationComponent.clickOnCityField();
        await locations.createLocationComponent.chooseRandomElement();

        await locations.createLocationComponent.enterName('Test Location');
        await locations.createLocationComponent.enterId('L002');
        await locations.createLocationComponent.enterTag('AutoTag');
        await locations.createLocationComponent.clickOnCreateNewTag();
        await locations.createLocationComponent.enterAddress('Private Drive street');
        await locations.createLocationComponent.enterZipCode(11111);
        await locations.createLocationComponent.clickOnSave();

        await locations.createLocationComponent.clickOnPeopleInLocation();
        await locations.createLocationComponent.addUser('Admin Admin');
        await locations.createLocationComponent.clickOnSave();

        await locations.createLocationComponent.clickOnPeopleInDepartment();
        await locations.createLocationComponent.addDepartment('AutoDepartment');
        await locations.createLocationComponent.clickOnAddedDepartment();
        await locations.createLocationComponent.addUser('Admin Admin');
        await locations.createLocationComponent.clickOnSave();

        await locations.createLocationComponent.clickOnPeopleInLocationGroup();
        await locations.createLocationComponent.addUser('Admin Admin');
        await locations.createLocationComponent.clickOnSave();

        await header.clickOnLocationsButton();
        await createdLocation.clickOnLocation();
        const locationCode = await locations.locationInfo.getLocationContent('Location Code');
    });
});
