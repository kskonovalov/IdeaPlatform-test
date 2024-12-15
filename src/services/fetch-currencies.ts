import { Currency } from "@/constants";

export const fetchCurrencies = async () => {
  // Simulated async API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        [Currency.RUB]: 1,
        [Currency.USD]: 103.25,
        [Currency.EUR]: 108.5,
      });
    }, 1000); // Simulate API delay
  });
};
