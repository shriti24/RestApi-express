import React, { useEffect, useState } from 'react';
// import './flights.css';
import { PriceOffersType, headers, reqType } from './types';
import { Table } from '../components.style';
import { format } from 'date-fns';

const FlightsTable = (props: reqType) => {
  const [data, setData] = useState<PriceOffersType[]>([]);
  const { origin, destination, departureDate, returnDate } = props;

  useEffect(() => {
    fetch('/promotions/Price_Offer')
      .then((res) => res.json())
      .then((details) => {
        setData(details.data);
      })
      .catch((e) => {
        // if (e.status === 403) setData([]);
      });
  }, []);

  useEffect(() => {
    const fromDt = format(departureDate, 'yyyy-MM-dd').toString();
    const toDt = format(returnDate, 'yyyy-MM-dd').toString();
    console.log(fromDt, toDt);
    fetch(
      `/promotions/priceoffers/flights/ond/${origin}/${destination}?departureDate=${fromDt}&returnDate=${toDt}`
    )
      .then((res) => res.json())
      .then((details) => {
        console.log(details);
        setData(details);
      })
      .catch((e) => {
        // setData([]);
      });
  }, [origin, destination, departureDate]);

  function _innerHeader() {
    return (
      <div className="inner_header_row">
        {headers.map((header: any) => (
          <div>{header}</div>
        ))}
      </div>
    );
  }
  function _innerRow() {
    return (
      <>
        {data.length > 0 ? (
          data.map((row: PriceOffersType) => (
            <div className="inner_body_row">
              <div className="inner_row">{row.origin}</div>
              <div className="inner_row">{row.destination}</div>
              <div className="inner_row">{row.departureDate}</div>
              <div className="inner_row">{row.returnDate}</div>
              <div className="inner_row">{row.seatAvailability}</div>
              <div className="inner_row">
                {row.price.amount} {row.price.currency}
              </div>
            </div>
          ))
        ) : (
          <div className="inner_body_row">
            <div className="inner_row">
              <div className="no-data">
                <p>The flight with the given dates are not avialable </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <React.Fragment>
      <Table>
        <div className="inner_table_head">{_innerHeader()}</div>
        <div className="inner_table_body">{_innerRow()}</div>
      </Table>
    </React.Fragment>
  );
};
export default FlightsTable;
