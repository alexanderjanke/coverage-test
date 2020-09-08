import test from "ava";
import { add, max, min } from "../src/add";
import { helloCheck } from "../src/stringStuff";

test("1+2 = 3", (t) => {
  const sum = add(1, 2);
  t.is(sum, 3);
});

test("max", (t) => {
  const res = max(5, 10);
  t.is(res, 10);
});

test("min", (t) => {
  const res = min(5, 10);
  t.is(res, 5);
});
test("min else", (t) => {
  const res = min(10, 5);
  t.is(res, 5);
});
test("is hello", (t) => {
  const res = helloCheck("Hello");
  t.is(res, "Indeed, hello");
});
test("is not hello", (t) => {
  const res = helloCheck("Hello!!!!");
  t.is(res, "Nay");
});
