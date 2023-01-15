import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Homepage } from '../../components/Homepage';
import { ActivityInfo } from '../../components/ActivityInfo';

describe('Activity Info', () => {
    test('Activity Info should render', () => {
        render(<ActivityInfo />);
        expect(screen.getByTestId('activity-info')).toBeInTheDocument();
    });
});