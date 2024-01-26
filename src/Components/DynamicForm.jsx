import React, { useState, useEffect } from 'react';

const DynamicForm = ({ fieldName, dataType, mandatory, maxLength, options, fromDate, toDate }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Reset input value when any dependency changes
    setInputValue('');
  }, [fieldName, dataType, mandatory, maxLength, options, fromDate, toDate]);

  const renderFormInput = () => {
    switch (dataType) {
      case 'text':
        return (
          <input
            type="text"
            placeholder={fieldName}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={maxLength}
            required={mandatory === 'Yes'}
            className="mt-1 p-2 w-full border rounded-md"
          />
        );
      case 'date':
        return (
          <input
            type="date"
            placeholder={fieldName}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required={mandatory === 'Yes'}
            className="mt-1 p-2 w-full border rounded-md"
          />
        );
      case 'dropdown':
        return (
          <>
            <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
              {fieldName}
            </label>
            {options && options.length > 0 ? (
              <select
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required={mandatory === 'Yes'}
                className="mt-1 p-2 w-full border rounded-md"
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <p>No options available</p>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return <div className="mb-4 bg-black">{renderFormInput()}</div>;
};

export default DynamicForm;