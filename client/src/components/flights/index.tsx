import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ComboBox, Container, DatePicker, ArrowRightIcon } from '../components.style';
import TextField from '@mui/material/TextField';
import FlightsTable from './flightsTable';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Flights = () => {
  const destList = ['FCO', 'DEL', 'LON', 'FRA', 'ROM'];

  const [strtDate, setStrtDate] = useState(new Date());
  const [retDate, setRetDate] = useState(new Date());
  const [origin, setOrigin] = useState('');
  const [dest, setDest] = useState('');

  const [fiterData, setFiterData] = useState({
    origin: '',
    destination: '',
    departureDate: strtDate,
    returnDate: retDate,
  });

  const handleFilter = () => {
    setFiterData({
      origin: origin,
      destination: dest,
      departureDate: strtDate,
      returnDate: retDate,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <div className="filter">
          <ComboBox
            disablePortal
            id="combo-box-demo"
            options={destList}
            onChange={(e, val: any) => setOrigin(val)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Origin" variant="outlined" />}
          />
          <ComboBox
            disablePortal
            options={destList}
            onChange={(e, val: any) => setDest(val)}
            sx={{ width: 300 }}
            renderInput={(val) => <TextField {...val} label="Destination" />}
          />
          <DatePicker
            label="fromDate"
            value={strtDate}
            minDate={new Date()}
            onChange={(date: any) => setStrtDate(date)}
            renderInput={(params: any) => <TextField {...params} />}
          />
          <DatePicker
            label="toDate"
            value={retDate}
            minDate={strtDate}
            onChange={(date: any) => setRetDate(date)}
            renderInput={(params: any) => <TextField {...params} />}
          />
          <ArrowRightIcon
            onClick={handleFilter}
            color="primary"
            data-testid="submit"
            fontSize="large"
          />
        </div>
        <FlightsTable {...fiterData} />
      </Container>
    </LocalizationProvider>
  );
};
export default Flights;
