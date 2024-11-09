const reverseStr = require('./reverseString');

test("String reversed", () => {
    expect(reverseStr("helloworld")).toBe("dlrowolleh");
});