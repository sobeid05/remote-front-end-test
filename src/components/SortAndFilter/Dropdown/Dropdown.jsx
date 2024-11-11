import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = ({ options, onChange, label, name, ariaLabel, value, dataTestId }) => {
    return (
        <div className="Dropdown">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                onChange={onChange}
                aria-label={ariaLabel}
                value={value || ''}
                data-testid={dataTestId} // Pass the data-testid prop here
            >
                <option value="" disabled hidden>
                    Select an option
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dataTestId: PropTypes.string, // Added prop for data-testid
};

export default Dropdown;
