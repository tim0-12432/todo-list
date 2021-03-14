module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://localhost:3000/todo-list"
    },
    testPathIgnorePatterns: [
        "src"
    ],
    testMatch: [
        "**/e2e/**/*.test.js"
    ]
};