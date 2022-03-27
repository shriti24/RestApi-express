import { render, screen, fireEvent } from '@testing-library/react';
import Flights from './index';

it('renders flight search component ', () => {
  render(<Flights />);
  expect(screen.getByLabelText('Origin')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Origin'), {
    target: { value: 'FCO' },
  });
  fireEvent.change(screen.getByLabelText('Destination'), {
    target: { value: 'ROM' },
  });
  fireEvent.change(screen.getByLabelText('fromDate'), {
    target: { value: '03/27/2022' },
  });
  fireEvent.change(screen.getByLabelText('toDate'), {
    target: { value: '03/30/2022' },
  });
  fireEvent.click(screen.getByTestId('submit'));
  expect(screen.getByTestId('table')).toBeInTheDocument();
});
