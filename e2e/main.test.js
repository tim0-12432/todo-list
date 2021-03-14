
beforeAll(async() => {
    await page.goto(URL, {
        waitUntil: "domcontentloaded"
    });
});

test("loaded", async() => {
    const root = await page.$("#root");
    const html = await page.evaluate(root => root.innerHTML, root);
    await expect(html).not.toBe("");
});

describe("form input", () => {
    test("input is empty", async() => {
        const input = await page.$("input[type='text']");
        const text = await page.evaluate(input => input.value, input);
        await expect(text).toBe("");
    });
    test("adding a todo", async() => {
        const testName = "testA";
        await page.type("input[type='text']", testName);
        await page.click("button[type='submit']");
        const list = await page.$(".Todolist_todoList__Ps-i7");
    });
});
