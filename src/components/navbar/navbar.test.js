import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';

describe('Navbar component', () => {

    const setup = () => render(<Navbar />, {wrapper: BrowserRouter});
    
    test('Should contain a list of links"', () => {
  
    setup();

    const list = screen.getAllByRole('link');
    expect(list).not.toHaveLength(0);
  })

});