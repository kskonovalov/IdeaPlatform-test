import React from "react";
import CheckMark from "../assets/images/check_mark.svg?react";
import { useStore } from "@/store/useStore";

const TRANSFERS_OPTIONS = [
  { label: "Без пересадок", value: 0 },
  { label: "1 пересадка", value: 1 },
  { label: "2 пересадки", value: 2 },
  { label: "3 пересадки", value: 3 },
];

const Transfers: React.FC = () => {
  const { transfers, setTransfers } = useStore();

  const wrapClasses = `group flex items-center justify-between transition-all duration-300 relative
  before:block before:absolute before:bg-blue-100 before:w-0 before:h-full before:top-0 before:-left-6 before:transition-all before:duration-300 before:opacity-0
    hover:before:w-[calc(100%+3rem)] hover:before:opacity-60`;
  const labelClasses = `flex items-center justify-between space-x-2 cursor-pointer transition-all duration-300 py-4 relative`;
  const checkboxClasses = `
  w-5 h-5 border rounded-sm border-border bg-white flex items-center justify-center transition-all duration-300 relative z-20
`;
  const textClasses =
    "text-text select-none text-base transition-all duration-300 relative z-20";
  const iconClasses =
    "transition-all duration-300 w-4 h-4 fill-primary text-primary relative z-20";

  const handleTransferChange = (value: number) => {
    if (transfers.includes(value)) {
      setTransfers(transfers.filter((t) => t !== value));
    } else {
      setTransfers([...transfers, value]);
    }
  };

  return (
    <div className="flex flex-col">
      <div className={wrapClasses}>
        <label className={`${labelClasses} after:block after:grow`}>
          <input
            type="checkbox"
            checked={!transfers.length}
            onChange={() => setTransfers([])}
            className="hidden"
          />
          <span
            className={`
        ${checkboxClasses}
        ${!transfers.length ? "bg-blue-100 border-primary" : ""}
      `}
          >
            <CheckMark
              title="check"
              className={`${iconClasses} 
              ${!transfers.length ? "opacity-100" : "opacity-0"}
             `}
            />
          </span>
          <span className={textClasses}>Все</span>
        </label>
      </div>
      {TRANSFERS_OPTIONS.map((filter) => {
        const isChecked = transfers.includes(filter.value);
        return (
          <div key={filter.value} className={wrapClasses}>
            <label className={labelClasses}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleTransferChange(filter.value)}
                className="hidden" // Hides the native checkbox
              />
              <span
                className={`
        ${checkboxClasses}
        ${isChecked ? "bg-blue-100 border-primary" : ""}
      `}
              >
                <CheckMark
                  title="check"
                  className={`${iconClasses} 
              ${isChecked ? "opacity-100" : "opacity-0"}
             `}
                />
              </span>
              <span className={textClasses}>{filter.label}</span>
            </label>
            <button
              className="text-primary uppercase transition-all duration-300 opacity-0 bg-transparent ml-auto border-0 p-0 text-sm relative z-20
               group-hover:opacity-100 group-hover:border-0 hover:text-accent"
              onClick={() => setTransfers([filter.value])}
            >
              Только
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Transfers;
