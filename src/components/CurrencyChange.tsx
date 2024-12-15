import React from "react";
import { useStore } from "@/store/useStore";
import { Currency } from "@/constants";

const CurrencyChange = () => {
  const { currency, setCurrency } = useStore();

  return (
    <div className="flex flex-nowrap mb-5 w-full over">
      {Object.values(Currency).map((c, index, array) => (
        <button
          key={c}
          onClick={() => setCurrency(c)}
          className={`
        px-4 py-2 transition-all transition-300 border grow rounded-none relative
        hover:bg-blue-100 hover:text-primary hover:border-primary hover:z-20
        ${
          currency === c
            ? "bg-primary text-white font-600 border-primary"
            : "bg-white text-primary border-border"
        }
        ${index > 0 ? "-translate-x-1" : ""}
        ${
          index === 0
            ? "rounded-l-md"
            : index === array.length - 1
              ? "rounded-r-md"
              : ""
        }
      `}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default CurrencyChange;
