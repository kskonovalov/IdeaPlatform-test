import React from "react";
import { useStore } from "@/store/useStore";
import { Currency } from "@/constants";

const CurrencyChange = () => {
  const { currency, setCurrency } = useStore();

  return (
    <div className="flex flex-nowrap rounded-md mb-5">
      {Object.values(Currency).map((c) => (
        <button
          key={c}
          onClick={() => setCurrency(c)}
          className={`${
            currency === c ? "bg-blue-500 text-white" : "bg-white text-black"
          } px-4 py-2 transition-all transition-300`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default CurrencyChange;
