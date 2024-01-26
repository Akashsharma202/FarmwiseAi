// DynamicForm.jsx
import React, { useState, useEffect } from 'react';

const DynamicForm = (props) => {
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    // Reset input values when data changes
    setInputValues({});
  }, [props.data]);

  const renderTextInput = (textData) => {
    return textData.map((item, index) => {
      const { fieldName, mandatory, maxLength } = item;
      return (
        <div key={index} className="mb-4 bg-black">
          <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
            {fieldName}
          </label>
          <input
            type="text"
            id={fieldName}
            placeholder={`Enter ${fieldName}`}
            value={inputValues[fieldName] || ''}
            onChange={(e) => setInputValues({ ...inputValues, [fieldName]: e.target.value })}
            maxLength={maxLength}
            required={mandatory}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      );
    });
  };

  const renderDateInput = (dateData) => {
    return dateData.map((item, index) => {
      const { fieldName, mandatory, fromDate, toDate } = item;
      const fromDateKey = `${fieldName}-fromDate`;
      const toDateKey = `${fieldName}-toDate`;

      const validateFromDate = (value) => {
        if (fromDate && new Date(value) < new Date(fromDate)) {
          alert(`Error: ${fieldName} - From Date cannot be less than ${fromDate}`);
        } else {
          setInputValues({ ...inputValues, [fromDateKey]: value });
        }
      };

      const validateToDate = (value) => {
        if (toDate && new Date(value) > new Date(toDate)) {
          alert(`Error: ${fieldName} - To Date cannot be greater than ${toDate}`);
        } else {
          setInputValues({ ...inputValues, [toDateKey]: value });
        }
      };

      return (
        <div key={index} className="mb-4 bg-black">
          <label htmlFor={fromDateKey} className="block text-sm font-semibold text-gray-600">
            {fieldName} - From Date
          </label>
          <input
            type="date"
            id={fromDateKey}
            value={inputValues[fromDateKey] || ''}
            onChange={(e) => validateFromDate(e.target.value)}
            required={mandatory === 'Yes'}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label htmlFor={toDateKey} className="block text-sm font-semibold text-gray-600 mt-4">
            {fieldName} - To Date
          </label>
          <input
            type="date"
            id={toDateKey}
            value={inputValues[toDateKey] || ''}
            onChange={(e) => validateToDate(e.target.value)}
            required={mandatory === 'Yes'}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      );
    });
  };

  const renderDropdownInput = (dropdownData) => {
    return dropdownData.map((item, index) => {
      const { fieldName, mandatory, options } = item;
      return (
        <div key={index} className="mb-4 bg-black">
          <label htmlFor={fieldName} className="block text-sm font-semibold text-gray-600">
            {fieldName}
          </label>
          {options && options.length > 0 ? (
            <select
              id={fieldName}
              value={inputValues[fieldName] || ''}
              onChange={(e) => setInputValues({ ...inputValues, [fieldName]: e.target.value })}
              required={mandatory === 'Yes'}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <p>No options available</p>
          )}
        </div>
      );
    });
  };

  const handleFormSubmit = () => {
    alert('Submitted Data:\n' + JSON.stringify(inputValues, null, 2));
  };

  const handleClearForm = () => {
    setInputValues({});
    props.setDform(false);
  };

  const textFields = props.data.filter((item) => item.type === 'text');
  const dateFields = props.data.filter((item) => item.type === 'date');
  const dropdownFields = props.data.filter((item) => item.type === 'dropdown');

  return (
    <div className='w-[60%] ml-[20%]'>
      <div>
        <h2 className="text-white">Text Fields</h2>
        {renderTextInput(textFields)}
      </div>
      <div>
        <h2 className="text-white">Date Fields</h2>
        {renderDateInput(dateFields)}
      </div>
      <div>
        <h2 className="text-white">Dropdown Fields</h2>
        {renderDropdownInput(dropdownFields)}
      </div>
      <div className="mt-4">
        <button
          onClick={handleFormSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4"
        >
          Submit
        </button>
        <button
          onClick={handleClearForm}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
