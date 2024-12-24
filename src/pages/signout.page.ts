import { expect, Locator, Page } from "@playwright/test";
import Login from "./login.page";

export default class Signout {
    page: Page;
    signout_btn: Locator;
    login_btn_again: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signout_btn = page.getByRole('link', { name: 'Sign out' });
        this.login_btn_again = page.locator('#navbar-menu');
    }

    async signout() {
        await this.signout_btn.click();
        const login = new Login(this.page);
        await expect(login.login_btn1).toBeVisible();
        await expect(this.login_btn_again).toContainText('Log in');
    }
}