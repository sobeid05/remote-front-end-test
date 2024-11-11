import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
    it('should render page not found page', () => {
        render(<PageNotFound />);
        const heading = screen.getByText('The page you are looking for could not be found.');
        expect(heading).toBeInTheDocument();
    });
});
