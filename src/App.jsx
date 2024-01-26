import React, { useState } from 'react';
import Dropdown from './Components/Dropdown';
import NavBar from './Components/NavBar';
import Field from './Components/Field';
import TextBox from './Components/TextBox';
import Date from './Components/Date';
import Table from './Components/Table';
import Drop from './Components/Drop';
import DynamicForm from './Components/DynamicForm';

function App() {
  const [user,setUser]=useState("");
  const [fieldSelect,setFieldSelect]=useState(false);
  const [fieldType,setFieldType]=useState("");
  const [data,setData]=useState([]);
  const [table,setTable]=useState(false);
  const [Dform,setDform]=useState(false);
  return (
    <div className='bg-black'>
      <NavBar/>
      <Dropdown setUser={setUser} setFieldSelect={setFieldSelect} fieldSelect={fieldSelect}/>
      {
        fieldSelect&&
        <div className='flex'>
        <Field setFieldType={setFieldType}/>
        {fieldType.length!=0&&
          fieldType==="Text Box"?
          <>
          <TextBox setTable={setTable} table={table} data={data} setData={setData} setFieldSelect={setFieldSelect}/>
          </>
          :
          fieldType==="Dropdown"?
          <>
          <Drop setTable={setTable} table={table} data={data} setData={setData} setFieldSelect={setFieldSelect}/>
          </>:
          fieldType==="Date Picker"?
          <>
          <Date table={table} setTable={setTable} data={data} setData={setData} setFieldSelect={setFieldSelect}/>
          </>
          :""
        }
        </div>
      }
      {
          table&&
          <>
          <Table Dform={Dform} setDform={setDform} data={data} setData={setData}/>
          </>
        }
        <div>
         
        {
          Dform&&
          <DynamicForm data={data}/>
        }
         
         </div>
    </div>
  );
}

export default App;
