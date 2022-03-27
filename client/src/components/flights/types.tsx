export type PriceOffersType = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: number;
  price: {
    amount: number;
    currency: string;
  };
  offerType?: string;
  uuid: string;
};

export type reqType = {
  origin: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
};

export const headers = [
  'Origin',
  'Destination',
  'Departure Date',
  'Return Date',
  'Seat Availability',
  'Price',
];
