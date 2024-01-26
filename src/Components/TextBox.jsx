import React, { useState } from 'react';

const MyForm = (props) => {
  const [formData, setFormData] = useState({
    type:"text",
    fieldName: '',
    dataType: 'Number',
    maxLength: 0,
    numberOfOptions: 0,
    options: "",
    fromDate: '',
    toDate: '',
    fieldInput: '',
    mandatory: 'No',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFieldSelect(false);
    const newData = [...props.data, { ...formData, maxLength: parseInt(formData.maxLength, 10) }];
    props.setData(newData);
    console.log(props.data)
    console.log('Form Data:', formData);
    props.setTable(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-5/6 justify-around">
      <div className="mb-4">
        <label htmlFor="fieldName" className="block text-sm font-medium text-gray-600">
          Field Display Name:
        </label>
        <input
          type="text"
          id="fieldName"
          name="fieldName"
          value={formData.fieldName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dataType" className="block text-sm font-medium text-gray-600">
          Field Data Type:
        </label>
        <select
          id="dataType"
          name="dataType"
          value={formData.dataType}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="String">String</option>
          <option value="Number">Number</option>
          {/* Add other data types as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="maxLength" className="block text-sm font-medium text-gray-600">
          Max Length Allowed:
        </label>
        <input
          type="number"
          id="maxLength"
          name="maxLength"
          value={formData.maxLength}
          defaultValue={10}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fieldInput" className="block text-sm font-medium text-gray-600">
          Field Input:
        </label>
        <input
          type="text"
          id="fieldInput"
          name="fieldInput"
          value={formData.fieldInput}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mandatory" className="block text-sm font-medium text-gray-600">
          Mandatory:
        </label>
        <select
          id="mandatory"
          name="mandatory"
          value={formData.mandatory}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Add Field
      </button>
    </form>
  );
};

export default MyForm;