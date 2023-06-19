import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginCom from '../../components/LoginCom';

// describe('Login Component', () => {
//     test('check 1', () => {
//         expect(1).toBe(1);
//     });
// }
// );
describe('Login Component', () => {
  test('login button is disabled initially', () => {
    render(<LoginCom />);
    const loginButton = screen.getByText('Log In');
    expect(loginButton).toBeDisabled();
  });

  test('login button is enabled when email and password are filled', () => {
    render(<LoginCom />);
    const loginButton = screen.getByText('Log In');
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(loginButton).toBeEnabled();
  });

  test('login button is disabled when email is empty', () => {
    render(<LoginCom />);
    const loginButton = screen.getByText('Log In');
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(loginButton).toBeDisabled();
  });

  test('login button is disabled when password is empty', () => {
    render(<LoginCom />);
    const loginButton = screen.getByText('Log In');
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    expect(loginButton).toBeDisabled();
  });
});
