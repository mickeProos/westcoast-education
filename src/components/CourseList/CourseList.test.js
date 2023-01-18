import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CourseList from './CourseList'

describe('Navbar component', () => {

    const setup = () => render(<CourseList />, {wrapper: BrowserRouter});
    
    test('Should contain a list of links"', () => {
  
    setup();

    const list = screen.getAllByRole('link');
    expect(list).not.toHaveLength(0);
  })

});