import AppBar from '@mui/material/AppBar';
// import './App.css';
import Flights from './components/flights/index';
import useWindowSize from './util/useWindowSize';

function App() {
  const { width } = useWindowSize();

  return (
    <div style={{ backgroundColor: `#FFF0F5`, textAlign: 'center', height: '100vh' }}>
      {width > 500 ? (
        <div className="App">
          <AppBar position="static" className="Appbar">
            <p>Lufthansa Air Booking </p>
          </AppBar>
          <Flights />
        </div>
      ) : (
        <div className="App">
          <AppBar position="static" className="Appbar">
            <p>Lufthansa Air Booking </p>
          </AppBar>
          <div style={{ paddingTop: '20px' }}>
            <Flights />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
