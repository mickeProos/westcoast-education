import { render, screen } from '@testing-library/react';
import AddTeacher from "./AddTeacher";
import { BrowserRouter } from "react-router-dom";

describe('Form should contain submitbutton', () => {
const setup = () => render(<AddTeacher/>,{wrapper: BrowserRouter});
test('A submit button', () => {

  setup();

  const submitButton = screen.getByRole('button', {
      name: /add/i,
  });
  
  expect(submitButton).toBeInTheDocument();

});
});