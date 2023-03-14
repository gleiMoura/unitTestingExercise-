import calculateTax from '../src';

const minSalary = 1320

describe("tests the function calculateTax", () => {
    it("Should return null to isent people", () => {
        const maxSalary = 2499.99
        const salary = generateSalary(minSalary, maxSalary);

        const valueToPay = calculateTax(salary);

        expect(valueToPay).toEqual(0);
    })
});

function generateSalary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}