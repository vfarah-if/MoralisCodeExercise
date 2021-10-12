import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  test('should render learn Moralis Web API 3', () => {
    render(<App />);
    const linkElement = screen.getByText(/Learn Moralis Web API 3 Quickly/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render Acme header logo', () => {
    render(<App />);
    const headerElement = screen.getByText(/Acme/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('should render login button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Log in/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render signup button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Sign up/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
