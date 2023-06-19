import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SignupCom from '../../components/SignupCom';

describe('Signup Component', () => {
  test('login button is disabled initially', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    expect(signupButton).toBeDisabled();
  });

  test('login button is enabled when all fields are filled', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userNameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password' } });

    expect(signupButton).toBeEnabled();
  });

  test('login button is disabled when name is empty', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(userNameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password' } });

    expect(signupButton).toBeDisabled();
  });

  test('login button is disabled when user name is empty', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userNameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password' } });

    expect(signupButton).toBeDisabled();
  });

  test('login button is disabled when email is empty', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userNameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password' } });

    expect(signupButton).toBeDisabled();
  });

  test('login button is disabled when password is empty', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userNameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password' } });

    expect(signupButton).toBeDisabled();
  });

  test('login button is disabled when Repeat Password is empty', () => {
    render(<SignupCom />);
    const signupButton = screen.getByTestId('signup-button');
    const nameInput = screen.getByPlaceholderText('Name');
    const userNameInput = screen.getByPlaceholderText('User Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userNameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(repeatPasswordInput, { target: { value: '' } });

    expect(signupButton).toBeDisabled();
  });
});
