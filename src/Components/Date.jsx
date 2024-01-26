import React, { useState, useEffect } from 'react';

const CustomForm = ({ type, fieldName, fieldInput, dataType, numberOfOptions, options, fromDate, toDate, mandatory }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Reset input value when any dependency changes
    setInputValue('');
  }, [fieldName, dataType, mandatory, numberOfOptions, options, fromDate, toDate]);

  const renderFormInput = () => {
    switch (type) {
      case 'text':
        return (
          <div className="mb-4 bg-black">
            <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
              {fieldName}
            </label>
            <input
              type={dataType}
              placeholder={fieldInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required={mandatory === 'Yes'}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        );
      case 'dropdown':
        return (
          <div className="mb-4 bg-black">
            <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
              {fieldName}
            </label>
            <select
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required={mandatory === 'Yes'}
              className="mt-1 p-2 w-full border rounded-md"
            >
              {options && options.length > 0 ? (
                options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))
              ) : (
                <p>No options available</p>
              )}
            </select>
          </div>
        );
      case 'date':
        return (
          <div className="mb-4 bg-black">
            <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
              {fieldName}
            </label>
            <input
              type="date"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required={mandatory === 'Yes'}
              min={fromDate}
              max={toDate}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderFormInput()}</>;
};

export default CustomForm;
