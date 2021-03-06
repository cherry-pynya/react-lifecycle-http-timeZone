import ClockWork from '../dashboard/clock/clock';

export default function TikTak({ zone, deleteZone }) {
  const { name, date, id } = zone;

  const handleDelte = (e) => {
    deleteZone(e.target.id);
  };

  return (
    <div className='timezone-dashboard-tiktak'>
      <button className='timezone-dashboard-tiktak-btn' type='button' id={id} onClick={handleDelte}>x</button>
      <span>{name}</span>
      <ClockWork date={date} />
    </div>
  );
}