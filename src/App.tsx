import React, { useEffect } from "react";
import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import Tickets from "@/components/Tickets";
import { fetchCurrencies } from "@/services/fetch-currencies";
import { useStore } from "@/store/useStore";

const App = () => {
  const { setCurrencyRates } = useStore();
  // load currency rates on page load
  useEffect(() => {
    const loadCurrencies = async () => {
      const rates = await fetchCurrencies();
      setCurrencyRates(rates as Record<string, number>);
    };
    loadCurrencies();
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="py-4">
        <Logo />
      </header>
      <main
        className={`flex gap-8 m-auto w-container max-w-full
      max-lg:flex-wrap
      `}
      >
        <div
          className={`w-3/12
        max-lg:w-full`}
        >
          <Sidebar />
        </div>
        <section
          className={`w-9/12 flex flex-col gap-m
        max-lg:w-full
        `}
        >
          <Tickets />
        </section>
      </main>
    </div>
  );
};

export default App;
