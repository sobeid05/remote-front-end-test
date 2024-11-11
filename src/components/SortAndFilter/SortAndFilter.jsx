import React, { useState } from 'react';
import './SortAndFilter.scss';
import Dropdown from './Dropdown/Dropdown';
import { propertyTypes, priceOptions, bedOptions } from '../../constants/index';

const SortAndFilter = ({ onSubmit }) => {
    const [filters, setFilters] = useState({
        propertyTypes: '',
        minPrice: '',
        maxPrice: '',
        minBeds: '',
        maxBeds: '',
        sortBy: 'price', //or bedrooms
        orderBy: 'asc', //'desc'
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(filters);
    };

    return (
        <div className="PropertyFilter">
            <h2 data-testid="property-filter-title">Find property for sale</h2>
            <form role="form" onSubmit={handleSubmit} data-testid="property-filter-form">
                <div className="PropertyFilter__controls">
                    <div className="PropertyFilter__control-group">
                        <Dropdown
                            label="Property types"
                            name="propertyTypes"
                            options={propertyTypes}
                            onChange={onChange}
                            ariaLabel="Select the type of property"
                            value={filters.propertyTypes}
                            dataTestId="property-type-dropdown"
                        />
                    </div>
                </div>

                <div className="PropertyFilter__controls">
                    <div className="PropertyFilter__control-group_pair">
                        <label data-testid="price-range-label">Price range (£)</label>
                        <div className="PropertyFilter__control-pair">
                            <Dropdown
                                label=""
                                name="minPrice"
                                options={['Min Price', ...priceOptions]}
                                onChange={onChange}
                                ariaLabel="Select minimum price range"
                                value={filters.minPrice}
                                dataTestId="min-price-dropdown"
                            />
                            <Dropdown
                                label=""
                                name="maxPrice"
                                options={['Max Price', ...priceOptions]}
                                onChange={onChange}
                                ariaLabel="Select maximum price range"
                                value={filters.maxPrice}
                                dataTestId="max-price-dropdown"
                            />
                        </div>
                    </div>

                    <div className="PropertyFilter__control-group">
                        <label data-testid="bedrooms-label">No. of bedrooms</label>
                        <div className="PropertyFilter__control-pair">
                            <Dropdown
                                label=""
                                name="minBeds"
                                options={['No min', ...bedOptions]}
                                onChange={onChange}
                                ariaLabel="Select minimum number of bedrooms"
                                value={filters.minBeds}
                                dataTestId="min-beds-dropdown"
                            />
                            <Dropdown
                                label=""
                                name="maxBeds"
                                options={['No max', ...bedOptions]}
                                onChange={onChange}
                                ariaLabel="Select maximum number of bedrooms"
                                value={filters.maxBeds}
                                dataTestId="max-beds-dropdown"
                            />
                        </div>
                    </div>
                </div>
                <div className="PropertyFilter__button-container">
                    <button
                        type="submit"
                        className="PropertyFilter__button"
                        aria-label="Search for properties based on selected filters"
                        data-testid="search-button"
                    >
                        Search properties
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SortAndFilter;
