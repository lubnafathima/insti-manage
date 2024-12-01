import React from "react";

const CheckboxComponent = ({ list, selectedItems, onChange }) => {
  return (
    <>
      <div className="flex gap-6">
        {list.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={option}
              checked={selectedItems.includes(option)}
              onChange={() => onChange(option)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor={option} className="text-sm text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckboxComponent;
