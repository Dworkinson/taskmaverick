import {pages} from "src/pageObjects/web/allPages";
import {expect} from 'chai';

const login = pages.login;

describe('Login to web app using valid email/password', async () => {
    it('web app loaded', async () => {
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        expect(await login.isSignInButtonEnabled()).to.be.false;
        await login.logIn('orgadmin@omcinc.net', 'T3stOrgP@ssword!');
    });
});
