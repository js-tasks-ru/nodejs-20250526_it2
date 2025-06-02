export default function sum(b, a) {
  if (typeof b !== "number" || typeof a !== "number") {
    throw new TypeError("Arguments must be numbers");
  }
  return b + a;
}
