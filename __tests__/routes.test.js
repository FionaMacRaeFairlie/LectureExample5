
const controller = require("../controllers/employeeControllers.js");


describe("test routes", () => {


  it("responds to /about", () => {
    const req = {};
    const res = { status: jest.fn(), redirect: jest.fn() };
    controller.about_page(req, res);
    expect(res.redirect.mock.calls[0][0]).toBe("/about.html");
    expect(res.status.mock.calls[0][0]).toBe(200);
  });
});
