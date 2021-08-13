import TikTak from './TikTak';

export default function Dashboard({ zones, deleteZone }) {
  return (
    <div className='timezone-dashboard'>
      {zones.map((el) => {
        return <TikTak zone={el} deleteZone={deleteZone} key={el.id} />
      })}
    </div>
  );
}