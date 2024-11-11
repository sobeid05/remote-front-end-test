import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortAndFilter from '../SortAndFilter';
import { propertyTypes, priceOptions, bedOptions } from '../../../constants/index';

describe('SortAndFilter Component', () => {
    const mockOnSubmit = jest.fn();

    beforeEach(() => {
        render(<SortAndFilter onSubmit={mockOnSubmit} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the component with all dropdowns and the search button', () => {
        expect(screen.getByTestId('property-filter-title')).toBeInTheDocument();
        expect(screen.getByTestId('property-type-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('min-price-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('max-price-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('min-beds-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('max-beds-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('search-button')).toBeInTheDocument();
    });

    it('allows the user to select property types, prices, and bedroom options', () => {
        const propertyTypeDropdown = screen.getByTestId('property-type-dropdown');
        fireEvent.change(propertyTypeDropdown, { target: { value: propertyTypes[1] } });
        expect(propertyTypeDropdown.value).toBe(propertyTypes[1]);

        const minPriceDropdown = screen.getByTestId('min-price-dropdown');
        fireEvent.change(minPriceDropdown, { target: { value: priceOptions[1] } });
        expect(minPriceDropdown.value).toBe(priceOptions[1].toString());

        const maxBedsDropdown = screen.getByTestId('max-beds-dropdown');
        fireEvent.change(maxBedsDropdown, { target: { value: bedOptions[2] } });
        expect(maxBedsDropdown.value).toBe(bedOptions[2].toString());
    });

    it('calls the onSubmit function with the correct filters when the form is submitted', () => {
        const propertyTypeDropdown = screen.getByTestId('property-type-dropdown');
        fireEvent.change(propertyTypeDropdown, { target: { value: propertyTypes[1] } });

        const minPriceDropdown = screen.getByTestId('min-price-dropdown');
        fireEvent.change(minPriceDropdown, { target: { value: priceOptions[1] } });

        const maxPriceDropdown = screen.getByTestId('max-price-dropdown');
        fireEvent.change(maxPriceDropdown, { target: { value: priceOptions[2] } });

        const minBedsDropdown = screen.getByTestId('min-beds-dropdown');
        fireEvent.change(minBedsDropdown, { target: { value: bedOptions[1] } });

        const maxBedsDropdown = screen.getByTestId('max-beds-dropdown');
        fireEvent.change(maxBedsDropdown, { target: { value: bedOptions[2] } });

        const submitButton = screen.getByTestId('search-button');
        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('submits the form with default values when the form is submitted without selecting any filters', () => {
        const submitButton = screen.getByTestId('search-button');
        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            propertyTypes: '',
            minPrice: '',
            maxPrice: '',
            minBeds: '',
            maxBeds: '',
            sortBy: 'price',
            orderBy: 'asc',
        });
    });
});
