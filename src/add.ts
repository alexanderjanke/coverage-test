export function add(a: number, b: number): number {
  return a + b;
}

export function max(a: number, b: number): number {
  if (a < b) {
    return b;
  } else {
    return a;
  }
}

export function min(a: number, b: number): number {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
