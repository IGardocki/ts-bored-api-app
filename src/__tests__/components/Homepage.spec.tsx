import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Homepage } from '../../components/Homepage';

describe('Homepage', () => {
    test('Homepage should render', () => {
        render(<Homepage />);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
    test('Homepage should provide a button to get an activity', ()=>{
        render(<Homepage />);
        expect(screen.getByTestId('activity-button')).toBeInTheDocument();
    });
    // test('Homepage should provde a space for user to see activity info', ()=>{
    //     render(<Homepage />);
    //     expect(screen.getByTestId('activity-info')).toBeInTheDocument();
    // })
})