/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TypeScriptの基本の型
 */

let bool: boolean = true;

let num: number = 0;

let str: string = "A";

let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

let tuple: [number, string] = [0, "A"];

// なんでも入れられるのがany、非推奨です
let any1: any = false;

// void
// 関数の定義の時の返り値で使用。返り値がないときの記述
const funcA = (): void => {
  const test = "TEST";
};

let null1: null = null;

let undefined1: undefined = undefined;

let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
