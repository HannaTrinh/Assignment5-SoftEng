import {test, expect} from "vitest";
import {marriedTax, selectTaxStrategy, separatedTax, singleTax} from "./TaxStatusFP";

test("Income: negative", () => {
    const income = -1;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(0);
    expect(marriedTaxFP).toBe(0);
    expect(separatedTaxFP).toBe(0);
});

test("Income: Zero", () => {
    const income = 0;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(0);
    expect(marriedTaxFP).toBe(0);
    expect(separatedTaxFP).toBe(0);
});

test("Income: 19,9999", () => {
    const income = 19999;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(2399.88);
    expect(marriedTaxFP).toBe(2399.88);
    expect(separatedTaxFP).toBe(2999.85);
});

test("Income: 20,000", () => {
    const income = 20000;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(3000);
    expect(marriedTaxFP).toBe(2400);
    expect(separatedTaxFP).toBe(3000);
});

test("Income: 40,000", () => {
    const income = 40000;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(6000);
    expect(marriedTaxFP).toBe(4800);
    expect(separatedTaxFP).toBe(6000);
});

test("Income: 50,000", () => {
    const income = 50000;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(10000);
    expect(marriedTaxFP).toBe(7500);
    expect(separatedTaxFP).toBe(10000);
});

test("Income: 100,000", () => {
    const income = 100000;
    const singleTaxFP = selectTaxStrategy(singleTax, income);
    const marriedTaxFP = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP = selectTaxStrategy(separatedTax, income);
    expect(singleTaxFP).toBe(20000);
    expect(marriedTaxFP).toBe(20000);
    expect(separatedTaxFP).toBe(25000);
});