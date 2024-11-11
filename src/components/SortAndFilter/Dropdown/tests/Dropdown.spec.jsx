import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '../Dropdown';

describe('Dropdown Component', () => {
    const props = {
        options: ['Option 1', 'Option 2', 'Option 3'],
        onChange: jest.fn(),
        label: 'Test Dropdown',
        name: 'testDropdown',
        ariaLabel: 'Select an option',
        value: '',
    };

    beforeEach(() => {
        render(<Dropdown {...props} />);
    });

    it('renders the dropdown with the correct label and options', () => {
        const dropdown = screen.getByRole('combobox', { name: props.ariaLabel });
        expect(dropdown).toBeInTheDocument();

        const label = screen.getByText(props.label);
        expect(label).toBeInTheDocument();

        props.options.forEach((option) => {
            const optionElement = screen.getByText(option);
            expect(optionElement).toBeInTheDocument();
        });
    });

    it('calls the onChange function when an option is selected', () => {
        const dropdown = screen.getByRole('combobox', { name: props.ariaLabel });
        fireEvent.change(dropdown, { target: { value: props.options[1] } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
    });
});
