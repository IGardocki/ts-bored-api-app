import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Homepage } from '../../components/Homepage';
import { ActivityInfo } from '../../components/ActivityInfo';
import { RecoilRoot } from 'recoil';

describe('Activity Info', () => {
    test('Activity Info should render', () => {
        render(<ActivityInfo />, {wrapper: RecoilRoot});
        expect(screen.getByTestId('activity-info')).toBeInTheDocument();
    });
});