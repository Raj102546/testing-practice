const calculator = require('./calculator');

test("calculating the values", () => {
    expect(calculator(1, 2, "+")).toBe(3);
    expect(calculator(2, 1, "-")).toBe(1);
    expect(calculator(1, 2, "*")).toBe(2);
    expect(calculator(2, 2, "/")).toBe(1);
});