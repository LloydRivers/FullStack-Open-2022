"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_number_problem_1 = require("./01-number.problem");
test("Should add the two numbers together", () => {
    expect((0, _01_number_problem_1.addTwoNumbers)(2, 4)).toEqual(6);
    expect((0, _01_number_problem_1.addTwoNumbers)(10, 10)).toEqual(20);
});
