import {screens} from "src/pageObjects/android/allScreens";

const login = screens.login;


describe('Login android app using valid email/password', async () => {
    it('android app loaded', async () => {
        await login.login('orgadmin@omcinc.net', 'T3stOrgP@ssword!');
    });
});
