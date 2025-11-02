export type CartItem = { price: number; quantity: number };
export function calcTotals(items: CartItem[]) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = items.length ? 5000 : 0;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping;
  return { subtotal, shipping, vat, grandTotal };
}
