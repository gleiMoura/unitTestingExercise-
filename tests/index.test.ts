import calculateTax from '../src';

const minSalary = 1320

describe("tests the function calculateTax", () => {
    it("Should return null to isent people", () => {
        const maxSalary = 2499.99
        const salary = generateSalary(minSalary, maxSalary);

        const valueToPay = calculateTax(salary);

        expect(valueToPay).toEqual(0);
    });

    it("should return the the value to people woloud pay 7,5%", () => {
        const minSalary = 2500;
        const maxSalary = 3199.99;

        const salary = generateSalary(minSalary, maxSalary);
        
        const valueToPay = calculateTax(salary);

        expect(valueToPay).toEqual(salary * 0.075);
    })
});

function generateSalary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}