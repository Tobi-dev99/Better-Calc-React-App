import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders basic buttons', () => {
  const { getByText } = render(<App />);
  const acButton = getByText(/AC/i);
  expect(acButton).toBeInTheDocument();
});
