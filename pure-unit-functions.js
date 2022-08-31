export function greet(name, surname) {
  return `Hello ${name} ${surname}!`;
}

export function calculateDiscountedPrice(originalPrice, discount) {
  return originalPrice - originalPrice * discount;
}

export function power(base, exponent) {
  return base ** exponent;
}
