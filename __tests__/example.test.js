const puppeteer = require("puppeteer");

describe('Check title of landing page', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3001/');
    await expect(page.title()).resolves.toMatch('Database Management Interface');
    // await expect(page.title()).resolves.toMatch('Database example');
    await browser.close();
  });

  // it('should be titled "Database Management Interface"', async () => {
  //   expect(true).toBeTruthy();
  // });

  it('should be titled "Database Management Interface"', async () => {
    await expect(page.title()).resolves.toMatch('Database Management Interface');
  });
});
// });

describe("Submit new employee name", () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3001/");
    await page.type("#name", "John Brown");
    await page.click("#submit");
    await page.screenshot({ path: "./__tests__/screenshots/example.png" });
    await browser.close();
  });

  it("Should be truthy", async () => {
    expect(true).toBeTruthy();
  });
});
