import {chromium, test} from "@playwright/test"

test("Login to Centrl", async () => {

    const browser = await chromium.launch({
        args: ['--start-maximized']  // start maximized
    });

    const context = await browser.newContext({
        viewport: null   // removes default 1280x720 limit
    });

    const page = await context.newPage();

    await page.goto("https://sandbox.oncentrl.net/");
    await page.fill("//*[@placeholder='Email' and @formcontrolname='email' ]", "sandbox@usersgroups.com")
    await page.click("//*[contains(text(),'Continue')]")
    await page.fill("//*[@formcontrolname='password' and @placeholder='Password']", "Centrl@123")
    
})

