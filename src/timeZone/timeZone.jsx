import { useState } from "react";
import Form from './form/form';
import Dashboard from './dashboard/dashboard';

export default function TimeZone() {
  const [zones, setTimezone] = useState([]);

  const addTimezone = (data) => {
    console.log(data)
  };

  const deleteZone = (id) => {
    console.log(id)
  }

  return (
    <div className='timezone'>
      <Form addTimezone={addTimezone} />
      <Dashboard zones={zones} deleteZone={deleteZone} />
    </div>
  );
}