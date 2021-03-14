
beforeAll(async() => {
    await page.goto(URL, {
        waitUntil: "domcontentloaded"
    });
});

describe("title", () => {
    test("title is not empty", async() => {
        const header = await page.$("header");
        const title = await page.evaluate(header => header.innerText, header);
        await expect(title).not.toBe("");
    });
});
describe("change title prompt", () => {
    test("prompt pops up", async() => {
        await page.click("header");
        const prompt = await page.$("#stfDialogPlace");
        await expect(prompt).toBeInTheDocument;
    });
    describe("input", () => {
        test("input is not empty", async() => {
            const input = await page.$("#stfDialogPlace input[type='text']");
            const text = await page.evaluate(input => input.value, input);
            await expect(text).not.toBe("");
        });
        test("can be typed in", async() => {
            const testName = "testA";
            await page.type("#stfDialogPlace input[type='text']", testName);
            const input = await page.$("#stfDialogPlace input[type='text']");
            const text = await page.evaluate(input => input.value, input);
            await expect(text).not.toBe("");
        });
        test("nothing is invalid", async() => {
            const inputValue = await page.$eval("#stfDialogPlace input[type='text']", el => el.value);
            for (let i = 0; i < inputValue.length; i++) {
                await page.keyboard.press('Backspace');
            }
            const input = await page.$("#stfDialogPlace input[type='text']");
            const validity = await page.evaluate(input => input.validity.value, input);
            await expect(validity).toBeFalsy;
        });
        test("input is valid", async() => {
            const testName = "testA";
            await page.type("#stfDialogPlace input[type='text']", testName);
            const input = await page.$("#stfDialogPlace input[type='text']");
            const validity = await page.evaluate(input => input.validity.value, input);
            await expect(validity).toBeTruthy;
        });
        test("can be submitted or cancelled", async() => {
            await page.click("#stfDialogPlace button");
            const prompt = await page.$("#stfDialogPlace");
            await expect(prompt).not.toBeInTheDocument;
        });
    });
});