export const toCurrency = (cents: number, currency = "USD") =>
  (cents / 100).toLocaleString(undefined, { style: "currency", currency });
