
beforeAll(async() => {
    await page.goto(URL, {
        waitUntil: "domcontentloaded"
    });
});

describe("form input", () => {
    test("input is empty", async() => {
        const input = await page.$("input[type='text']");
        const text = await page.evaluate(input => input.value, input);
        await expect(text).toBe("");
    });
    test("can be typed in", async() => {
        const testName = "testA";
        await page.type("input[type='text']", testName);
        const input = await page.$("input[type='text']");
        const text = await page.evaluate(input => input.value, input);
        await expect(text).toBe(testName);
    });
    test("empty after submit", async() => {
        await page.click("button[type='submit']");
        const input = await page.$("input[type='text']");
        const text = await page.evaluate(input => input.value, input);
        await expect(text).toBe("");
    });
});
describe("form select", () => {
    test("selected all", async() => {
        const input = await page.$("select[name='todos']");
        const selected = await page.evaluate(input => input.value, input);
        await expect(selected).toBe("all");
    });
    test("select completed", async() => {
        await page.select("select[name='todos']", "completed");
        const input = await page.$("select[name='todos']");
        const selected = await page.evaluate(input => input.value, input);
        await expect(selected).toBe("completed");
    });
    test("select uncompleted", async() => {
        await page.select("select[name='todos']", "uncompleted");
        const input = await page.$("select[name='todos']");
        const selected = await page.evaluate(input => input.value, input);
        await expect(selected).toBe("uncompleted");
    });
});