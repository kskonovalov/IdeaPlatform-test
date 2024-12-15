import React from "react";
import { useStore } from "@/store/useStore";

const TRANSFERS_OPTIONS = [
  { label: "Без пересадок", value: 0 },
  { label: "1 пересадка", value: 1 },
  { label: "2 пересадки", value: 2 },
  { label: "3 пересадки", value: 3 },
];

const Transfers: React.FC = () => {
  const { transfers, setTransfers } = useStore();

  const labelClasses = "group items-center gap-4 flex flex-wrap";
  const checkBoxClasses =
    "form-checkbox text-primary w-[20px] h-[20px] bg-none";
  const textClasses = "text-text cursor-pointer select-none text-base";

  const handleTransferChange = (value: number) => {
    if (transfers.includes(value)) {
      setTransfers(transfers.filter((t) => t !== value));
    } else {
      setTransfers([...transfers, value]);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <label className={labelClasses}>
        <input
          type="checkbox"
          checked={!transfers.length}
          onChange={() => setTransfers([])}
          className={`${checkBoxClasses}
              ${!transfers.length ? "border-primary" : "border-gray-300"}
              `}
        />
        <span className={textClasses}>Все</span>
      </label>
      {TRANSFERS_OPTIONS.map((filter) => {
        const isChecked = transfers.includes(filter.value);
        return (
          <label key={filter.value} className={labelClasses}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleTransferChange(filter.value)}
              className={`${checkBoxClasses}
              ${isChecked ? "border-primary" : "border-gray-300"}
              `}
            />
            <span className="text-text cursor-pointer select-none text-base">
              {filter.label}
            </span>
            <button
              className={`text-primary uppercase transition-all duration-300 opacity-0 bg-transparent ml-auto border-0 p-0
               group-hover:opacity-100 group-hover:border-0 hover:text-accent`}
              onClick={() => setTransfers([filter.value])}
            >
              Только
            </button>
          </label>
        );
      })}
    </div>
  );
};

export default Transfers;
