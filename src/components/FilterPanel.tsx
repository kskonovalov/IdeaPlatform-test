import React from "react";
import { Filters } from "../types";

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
  const toggleFilter = (stops: number) => {
    setFilters((prev) => ({
      ...prev,
      [stops]: !prev[stops],
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">
        Количество пересадок
      </h4>
      {[
        { label: "Все", value: -1 },
        { label: "Без пересадок", value: 0 },
        { label: "1 пересадка", value: 1 },
        { label: "2 пересадки", value: 2 },
        { label: "3 пересадки", value: 3 },
      ].map((filter) => (
        <label key={filter.value} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={
              filter.value === -1
                ? Object.values(filters).some(Boolean)
                : filters[filter.value] || false
            }
            onChange={() => toggleFilter(filter.value)}
            className="form-checkbox text-orange-500 focus:ring-orange-500"
          />
          <span className="text-sm text-gray-700">{filter.label}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterPanel;
