import React from "react";
import Transfers from "@/components/Transfers";
import CurrencyChange from "@/components/CurrencyChange";
import { useStore } from "@/store/useStore";

const Sidebar = () => {
  const { currencyRates } = useStore();

  const headingClasses =
    "uppercase text-lg text-gray font-medium text-text mb-3";
  return (
    <div className="bg-white p-6 shadow rounded-md">
      {currencyRates && (
        <>
          <h4 className={headingClasses}>Валюта</h4>
          <CurrencyChange />
        </>
      )}
      <h4 className={headingClasses}>Количество пересадок</h4>
      <Transfers />
    </div>
  );
};

export default Sidebar;
