import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function ClockWork({date}) {
  const [time, setTime] = useState(date);
  let counter = 1000;

  useEffect(() => {
    const interval = setInterval(
      () => {
        const newDate = new Date(time.getTime() + counter);
        counter += 1000;
        setTime(newDate); 
      },
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <Clock value={time} />
    </div>
  );
}