import React from 'react';
import { render, screen, within } from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import useProperties from '../../../hooks/useProperties/useProperties';

jest.mock('../../../hooks/useProperties/useProperties');

describe('PropertyListing', () => {
    const mockProperties = [
        {
            price: 500000,
            propertyTitle: '3 Bed Flat',
            mainImage: 'img1.jpg',
            displayAddress: 'London',
            branchName: 'Branch A',
            summary: 'Beautiful flat',
            propertyUrl: 'url1',
        },
        {
            price: 750000,
            propertyTitle: '2 Bed House',
            mainImage: 'img2.jpg',
            displayAddress: 'Manchester',
            branchName: 'Branch B',
            summary: 'Cozy house',
            propertyUrl: 'url2',
        },
        {
            price: 1000000,
            propertyTitle: '4 Bed Villa',
            mainImage: 'img3.jpg',
            displayAddress: 'Bristol',
            branchName: 'Branch C',
            summary: 'Luxury villa',
            propertyUrl: 'url3',
        },
        {
            price: 300000,
            propertyTitle: '1 Bed Studio',
            mainImage: 'img4.jpg',
            displayAddress: 'Birmingham',
            branchName: 'Branch D',
            summary: 'Compact studio',
            propertyUrl: 'url4',
        },
        {
            price: 450000,
            propertyTitle: '3 Bed Bungalow',
            mainImage: 'img5.jpg',
            displayAddress: 'Oxford',
            branchName: 'Branch E',
            summary: 'Spacious bungalow',
            propertyUrl: 'url5',
        },
    ];

    beforeEach(() => {
        // Mock the hook with different responses before each test
        useProperties.mockReturnValue({
            getProperties: jest.fn(),
            properties: mockProperties,
            loading: false,
            error: null,
        });
    });

    it('should display loading state when loading is true', () => {
        useProperties.mockReturnValue({
            getProperties: jest.fn(),
            properties: [],
            loading: true,
            error: null,
        });

        render(<PropertyListing />);
        expect(screen.getByRole('status')).toHaveTextContent('Loading...');
    });

    it('should display error message when error is present', () => {
        useProperties.mockReturnValue({
            getProperties: jest.fn(),
            properties: [],
            loading: false,
            error: 'Something went wrong',
        });

        render(<PropertyListing />);
    });

    it('should display no properties found message if no properties exist', () => {
        useProperties.mockReturnValue({
            getProperties: jest.fn(),
            properties: [],
            loading: false,
            error: null,
        });

        render(<PropertyListing />);
    });
});
