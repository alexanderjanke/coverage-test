import test from "ava";
import { add, max, min } from "../src/add";

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
