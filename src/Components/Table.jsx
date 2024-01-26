import React from 'react';

const Table = (props) => {
  const HandleReset = () => {
    props.setData([]);
  };

  const HandleConfirm=()=>{
    console.log(props.Dform)
    props.setDform(true);
  }

  const excludedFields = ['maxLength', 'numberOfOptions', 'options', 'fromDate', 'toDate'];

  const filteredData = props.data.map((item) => {
    const filteredItem = { ...item };
    excludedFields.forEach((field) => {
      delete filteredItem[field];
    });
    return filteredItem;
  });

  if (filteredData.length === 0) {
    return (
      <div className="max-w-screen-lg bg-black mx-auto mt-8 p-6 rounded-lg shadow-lg">
        <p className="text-white"></p>
        <div className="mt-6 flex justify-end space-x-4">
          {/* <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
            onClick={HandleReset}
          >
            Reset
          </button> */}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg bg-black mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            {Object.keys(filteredData[0]).map((key) => (
              <th key={key} className="py-2 px-4 border-b font-semibold">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index} className="py-2 px-4 border-b justify-center">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={HandleConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
          onClick={HandleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Table;
