export const fetchFlights: any = async () => {
  let resp: any;
  await fetch('/promotions/Price_Offer')
    .then((res) => {
      resp = res.json();
    })
    .catch((e) => {
      return e;
    });
  return resp;
};

export const filterFlights: any = () => {
  fetch(
    '/promotions/priceoffers/flights/ond/:origin/:destination?departureDate=?deptDate&returnDate=?retDate'
  )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
