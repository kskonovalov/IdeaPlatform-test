enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}
const CurrencySymbols = {
  [Currency.RUB]: "₽",
  [Currency.USD]: "$",
  [Currency.EUR]: "€",
};

export { Currency, CurrencySymbols };
