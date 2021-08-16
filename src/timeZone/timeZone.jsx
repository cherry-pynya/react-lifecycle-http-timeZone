import { useState } from "react";
import Form from './form/form';
import Dashboard from './dashboard/dashboard';
import { v4 as uuidv4 } from 'uuid';

export default function TimeZone() {
  const [zones, setTimezone] = useState([]);

  const addTimezone = (data) => {
    const {timeZone, name} = data;
    const now = new Date();
    const date = new Date(now.getTime() + (timeZone * 360000));
    zones.push({
      date: date,
      name: name,
      id: uuidv4(),
    });
    setTimezone([...zones]);
  };

  const deleteZone = (id) => {
    const index = zones.findIndex((el) => el.id === id);
    zones.splice(index, 1);
    setTimezone([...zones]);
  }

  return (
    <div className='timezone'>
      <Form addTimezone={addTimezone} />
      <Dashboard zones={zones} deleteZone={deleteZone} />
    </div>
  );
}