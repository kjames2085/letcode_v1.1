import { test} from "../src/fixture/myfixture";
import ENV from "../src/utlity/env";
import * as testdata from "../src/utlity/testdata.json";

test.describe('Suite 1', () => {
    test('Basic UI Testing 1', async ({launch, login, signout}) => {
        await test.step('Login into letcode.in', async () => {
            await login.login(testdata.username, testdata.password);
        })
    })

    test('Basic UI Testing 2', async ({launch, login, signout}) => {
        await test.step('Login into letcode.in', async () => {
            await login.login(testdata.username, testdata.password);
        })
    })
})

test.describe('Suite 2', () => {
    test('Basic UI Testing 3', async ({launch, login, signout}) => {
        await test.step('Login into letcode.in', async () => {
            await login.login(testdata.username, testdata.password);
        })
    })

    test('Basic UI Testing 4', async ({launch, login, signout}) => {
        await test.step('Login into letcode.in', async () => {
            await login.login(testdata.username, testdata.password);
        })

    })
})