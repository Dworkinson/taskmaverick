import {screens} from "src/pageObjects/android/allScreens";
import {creds} from "../../creds";

const login = screens.login;


describe('Login android app using valid email/password', async () => {
    it('android app loaded', async () => {
        await login.logIn(creds.email, creds.password);
    });
});
