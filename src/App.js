import './App.css';
import TimeZone from './timeZone/timeZone';

function App() {
  const date = new Date();
  console.log(date)
  return (
    <div className="App">
      <TimeZone />
    </div>
  );
}

export default App;
