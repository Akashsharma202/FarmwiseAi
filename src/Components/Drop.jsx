import React, { useState, useEffect } from 'react';

const MyForm = (props) => {
    const [fieldName, setFieldName] = useState('');
    const [dataType, setDataType] = useState('String');
    const [mandatory, setMandatory] = useState('Yes');
    const [numberOfOptions, setNumberOfOptions] = useState(2);
    const [options, setOptions] = useState(Array.from({ length: numberOfOptions }, () => ''));

    const [formData, setFormData] = useState({
        type:"dropdown",
        fieldName: '',
        dataType: 'String',
        maxLength: 0,
        numberOfOptions: 2,
        options: Array.from({ length: 2 }, () => ''),
        fromDate: '',
        toDate: '',
        fieldInput: '',
        mandatory: 'Yes',
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            fieldName,
        }));
    }, [fieldName]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            dataType,
        }));
    }, [dataType]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            options,
        }));
    }, [options]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            mandatory,
        }));
    }, [mandatory]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            numberOfOptions,
        }));
    }, [numberOfOptions]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Do something with the form data (formData)
        console.log('Form Data:', formData);

        // Reset form fields if needed
        setFieldName('');
        setDataType('String');
        setMandatory('Yes');
        setNumberOfOptions(2);
        setOptions(Array.from({ length: 2 }, () => ''));

        props.setFieldSelect(false);
        const newData = [...props.data, { ...formData, maxLength: parseInt(formData.maxLength, 10) }];
        props.setData(newData);
        console.log(props.data);
        console.log('Form Data:', formData);
        props.setTable(true);
    };

    const renderOptionsInputs = () => {
        return (
          <div className="mb-4">
            <label htmlFor="numberOfOptions" className="block text-sm font-semibold text-gray-600">
              Number of Options
            </label>
            <input
              type="number"
              id="numberOfOptions"
              name="numberOfOptions"
              value={numberOfOptions}
              onChange={(e) => {
                const newNumberOfOptions = parseInt(e.target.value, 10);
                setNumberOfOptions(newNumberOfOptions);
                // Reset options when changing the number of options
                setOptions(Array.from({ length: newNumberOfOptions }, () => ''));
              }}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
      
            <label htmlFor="options" className="block text-sm font-semibold text-gray-600 mt-4">
              Options
            </label>
            {options.map((value, index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  id={`option-${index}`}
                  name={`option-${index}`}
                  value={value}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
                {index < options.length - 1 && <span className="mx-1">,</span>}
              </React.Fragment>
            ))}
          </div>
        );
      };
      

    return (
        <form className='flex w-5/6 justify-around' onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fieldName" className="block text-sm font-semibold text-gray-600">
                    Field Name
                </label>
                <input
                    type="text"
                    id="fieldName"
                    name="fieldName"
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dataType" className="block text-sm font-semibold text-gray-600">
                    Field Data Type
                </label>
                <select
                    id="dataType"
                    name="dataType"
                    value={dataType}
                    onChange={(e) => {
                        setDataType(e.target.value);
                        // Reset options when changing data type
                        setOptions(Array.from({ length: 2 }, () => ''));
                    }}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                >
                    <option value="String">String</option>
                    <option value="Number">Number</option>
                    <option value="Custom Options">Custom Options</option>
                    {/* Add other data types as needed */}
                </select>
            </div>

            {renderOptionsInputs()}

            <div className="mb-4">
                <label htmlFor="mandatory" className="block text-sm font-semibold text-gray-600">
                    Mandatory
                </label>
                <select
                    id="mandatory"
                    name="mandatory"
                    value={mandatory}
                    onChange={(e) => setMandatory(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 h-11 place-self-center"
            >
                Submit
            </button>
        </form>
    );
};

export default MyForm;