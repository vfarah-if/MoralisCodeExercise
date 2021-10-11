import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn Moralis Web API 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Moralis Web API 3 Quickly/i);
  expect(linkElement).toBeInTheDocument();
});
