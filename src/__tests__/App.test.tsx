import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('Router', () => {
  const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return {
      user: userEvent.setup(),
      ...render(ui, { wrapper: BrowserRouter }),
    };
  };

  describe('Routes should', () => {
    test('load home page on default route', () => {
      renderWithRouter(<App />);
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});
