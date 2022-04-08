import {expect} from 'chai';
import {creds} from "../../creds";

import * as pages from "src/pageObjects/web/allPages";

describe('Login to web app using valid email/password', async () => {
    it('web app loaded', async () => {
        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        expect(await login.isSignInButtonEnabled()).to.be.false;
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await header.clickOnUserAvatarButton();
        await header.clickOnSignOutButton();
    });

    it.only('debugging', async () => {
        const login = new pages.LoginPage(browser);
        const header = new pages.Header(browser);
        const locations = new pages.LocationPage(browser);

        // await login.open();
        await browser.url(creds.ORGANIZATION_URL);
        expect(await login.isSignInButtonEnabled()).to.be.false;
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
        await header.clickOnLocationsButton();
        await locations.clickOnCreateNewLocation();

        await locations.createLocationComponent.enterName('Test Location');
        await locations.createLocationComponent.enterId('L002');
        await locations.createLocationComponent.enterAddress('Street');
        await locations.createLocationComponent.enterZipCode(11111);


        await locations.createLocationComponent.clickOnStateField();
        await locations.createLocationComponent.chooseRandomElement();

        await locations.createLocationComponent.clickOnCountryField();
        await locations.createLocationComponent.chooseRandomElement();

        await locations.createLocationComponent.clickOnCityField();
        await locations.createLocationComponent.chooseRandomElement();

        await locations.createLocationComponent.clickOnSaveContinue();
    });
});
