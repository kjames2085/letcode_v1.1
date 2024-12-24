import { Locator, Page } from "@playwright/test";

export default class Login {
    page: Page;
    login_btn1: Locator;
    email_txtbox: Locator;
    password_txtbox: Locator;
    login_btn2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.login_btn1 = page.getByRole('link', { name: 'Log in' });
        this.email_txtbox = page.getByRole('textbox', { name: 'Enter registered email' });
        this.password_txtbox = page.getByPlaceholder('Enter password');
        this.login_btn2 = page.getByRole('button', { name: 'LOGIN' });

    }

    async login(username: string, password: string) {
        await this.login_btn1.click();
        await this.email_txtbox.click();
        await this.email_txtbox.fill(username);
        await this.password_txtbox.click();
        await this.password_txtbox.fill(password);
        await this.login_btn2.click();
    }
}