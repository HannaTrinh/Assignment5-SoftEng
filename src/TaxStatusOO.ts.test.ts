import {expect, test} from "vitest";
import {Context, Married, Separated, Single, TaxStatusOO} from "./TaxStatusOO.ts";

test("Income: negative", () => {
    const income = -1;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(0);
    expect(marriedTaxOO).toBe(0);
    expect(separatedTaxOO).toBe(0);
});

test("Income: Zero", () => {
    const income = 0;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(0);
    expect(marriedTaxOO).toBe(0);
    expect(separatedTaxOO).toBe(0);
});

test("Income: 19,9999", () => {
    const income = 19999;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(2399.88);
    expect(marriedTaxOO).toBe(2399.88);
    expect(separatedTaxOO).toBe(2999.85);
});

test("Income: 20,000", () => {
    const income = 20000;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(3000);
    expect(marriedTaxOO).toBe(2400);
    expect(separatedTaxOO).toBe(3000);
});

test("Income: 40,000", () => {
    const income = 40000;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(6000);
    expect(marriedTaxOO).toBe(4800);
    expect(separatedTaxOO).toBe(6000);
});

test("Income: 50,000", () => {
    const income = 50000;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(10000);
    expect(marriedTaxOO).toBe(7500);
    expect(separatedTaxOO).toBe(10000);
});

test("Income: 100,000", () => {
    const income = 100000;
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelectionS: Context = new Context(single);
    const taxStatusSelectionM: Context = new Context(married);
    const taxStatusSelectionSep: Context = new Context(separated);
    const singleTaxOO: number = taxStatusSelectionS.calculateTax(income);
    const marriedTaxOO: number = taxStatusSelectionM.calculateTax(income);
    const separatedTaxOO: number = taxStatusSelectionSep.calculateTax(income);
    expect(singleTaxOO).toBe(20000);
    expect(marriedTaxOO).toBe(20000);
    expect(separatedTaxOO).toBe(25000);
});