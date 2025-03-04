import React from 'react';
import {  render, screen,  } from '@testing-library/react';
import App from './App';
import {userEvent} from '@testing-library/user-event'

test('renders correctly without any errors', () => {
  render(<App />);

  const textElement = screen.getByText('What needs to be done?');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByTestId("new-todo-input")
  expect(inputElement).toBeInTheDocument();

  const addBtnElement = screen.getByTestId("add-todo-btn")
  expect(addBtnElement).toBeInTheDocument()
});

test.only("adds new task to the list correctly", () => {
  const inputElement = screen.getByTestId("new-todo-input")
  userEvent.type(inputElement, 'task 1')

  const addBtnElement = screen.getByTestId("add-todo-btn")
  userEvent.click(addBtnElement)

  screen.getByLabelText('task 1')
})

// Test 3 - check whether the checkbox button is checked when a task is marked done