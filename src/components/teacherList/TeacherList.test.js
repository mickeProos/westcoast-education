import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TeacherList from './TeacherList'

describe('Navbar component', () => {

    const setup = () => render(<TeacherList />, {wrapper: BrowserRouter});
    
    test('Should contain a list of links"', () => {
  
    setup();

    const list = screen.getAllByRole('link');
    expect(list).not.toHaveLength(0);
  })

});