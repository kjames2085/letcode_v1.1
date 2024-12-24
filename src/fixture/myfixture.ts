import {test as mytest} from "@playwright/test";
import Launch from "../pages/launch.page";
import Login from "../pages/login.page";
import Signout from "../pages/signout.page";
import ENV from "../utlity/env";

type pages = {

    launch: Launch,
    login: Login,
    signout: Signout,
    foreachtest: void

}

export const test = mytest.extend <pages> ({

    launch: async ({page},use) => await use(new Launch(page)),
    login: async ({page},use) => await use(new Login(page)),
    signout: async({page},use) => await use(new Signout(page)),

    foreachtest: [async ({ page }, use) => {
        // This code runs before every test.
        const launch = new Launch(page);
        await launch.launch(ENV.URL);
        await use();
        // This code runs after every test.
        const signout = new Signout(page);
        await signout.signout();
      }, { auto: true }]

    
})
