import {pages} from "src/pageObjects/web/allPages";
import {expect} from 'chai';
import {creds} from "../../creds";


const login = pages.login;
const header = pages.header;

describe('Login to web app using valid email/password', async () => {
    it('web app loaded', async () => {
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        expect(await login.isSignInButtonEnabled()).to.be.false;
        await login.logIn(creds.email, creds.password);
        await header.clickOnUserAvatarButton();
        await header.clickOnSignOutButton();
    });
});
