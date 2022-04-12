import * as screens from "src/pageObjects/android/allScreens";

import {creds} from "../../creds";

const fs = require('fs');

describe('Login android app using valid email/password', async () => {
    it('android app loaded', async () => {
        const login = new screens.LoginScreen(browser);
        await login.logIn(creds.ADMIN_USERNAME, creds.ADMIN_PASSWORD);
    });
});
