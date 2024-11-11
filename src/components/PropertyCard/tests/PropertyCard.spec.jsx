import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from '../PropertyCard';

describe('PropertyCard', () => {
    const props = {
        summary: 'Superbly insulated, energy efficient, secure and virtually invisible',
        displayAddress: 'North Shire, TS13 4TJ',
        price: 500,
        branchName: '[branch/agent name]',
        propertyTitle: '2 Bed Hobbit Hole For Sale',
        mainImage: 'something.com/61AG4UpUoPL._SX300_QL70_.jpg',
        propertyUrl: 'https://example.com/property',
    };

    it('should render property image', () => {
        render(<PropertyCard {...props} />);
        const image = screen.getByAltText('Property');
        expect(image).toBeInTheDocument();
        expect(image.src).toContain('61AG4UpUoPL._SX300_QL70_.jpg');
    });

    it('should render property price', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('£ 500')).toBeInTheDocument();
    });

    it('should render property title', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('2 Bed Hobbit Hole For Sale')).toBeInTheDocument();
    });

    it('should render property address', () => {
        render(<PropertyCard {...props} />);
        expect(screen.getByText('North Shire, TS13 4TJ')).toBeInTheDocument();
    });

    it('should render property summary', () => {
        render(<PropertyCard {...props} />);
        expect(
            screen.getByText('Superbly insulated, energy efficient, secure and virtually invisible')
        ).toBeInTheDocument();
    });

    it('should render agent contact link', () => {
        render(<PropertyCard {...props} />);
        const link = screen.getByRole('link', { name: /Contact \[branch\/agent name\]/i });
        expect(link).toHaveAttribute('href', 'mailto:fakemail.fedtest@rightmove.co.uk');
    });

    it('should render property link', () => {
        render(<PropertyCard {...props} />);
        const propertyLink = screen.getByRole('link', { name: /2 Bed Hobbit Hole For Sale/i });
        expect(propertyLink).toHaveAttribute('href', 'https://example.com/property');
    });

    it('should not crash if props are missing', () => {
        render(<PropertyCard />);
        expect(screen.queryByText('£')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Property')).not.toBeInTheDocument();
    });

    it('should have accessible email link', () => {
        render(<PropertyCard {...props} />);
        const emailLink = screen.getByRole('link', { name: /Contact \[branch\/agent name\]/i });
        expect(emailLink).toBeInTheDocument();
    });
});
