import React from "react";
import Transfers from "@/components/Transfers";
import CurrencyChange from "@/components/CurrencyChange";
import { useStore } from "@/store/useStore";

const Sidebar = () => {
  const { currencyRates } = useStore();

  const headingClasses =
    "uppercase text-lg text-gray font-medium text-text mb-3";
  return (
    <div
      className={`bg-white px-6 py-8 shadow rounded-md
    max-lg:flex max-lg:gap-10 
    max-md:flex-col max-md:gap-0
    `}
    >
      {currencyRates && (
        <div
          className={`mb-10
        max-md:mb-2`}
        >
          <h4 className={headingClasses}>Валюта</h4>
          <CurrencyChange />
        </div>
      )}
      <h4 className={headingClasses}>Количество пересадок</h4>
      <Transfers />
    </div>
  );
};

export default Sidebar;
