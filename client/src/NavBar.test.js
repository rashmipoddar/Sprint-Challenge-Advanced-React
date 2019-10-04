import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import NavBar from './components/NavBar';

test('navbar renders without crashing', () => {
  render(<NavBar />);
  
});

test('womens text is found', () => {
  const { getByText } = render(<NavBar />);
  getByText(/women's/i);
})
