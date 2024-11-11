import React, { useState, useEffect } from 'react';
import './PropertyListing.scss';
import Layout from '../Layout/Layout';
import PropertyCard from '../PropertyCard';
import SortAndFilter from '../SortAndFilter/SortAndFilter';
import useProperties from '../../hooks/useProperties/useProperties';

const PropertyListing = () => {
    const [filters, setFilters] = useState({
        propertyTypes: '',
        minPrice: '',
        maxPrice: '',
        minBeds: '',
        maxBeds: '',
        sortBy: 'price', //or bedrooms
        orderBy: 'asc', //'desc'
    });

    const filtersExcludingEmptyValues = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '')
    );

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const searchParams = '/?' + new URLSearchParams(filtersExcludingEmptyValues).toString();

    useEffect(() => {
        const fetchProperties = async (url) => {
            try {
                setLoading(true);

                const response = await fetch(`http://localhost:3000/api/properties${searchParams}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                setProperties(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, [filters]);

    const onSubmit = (formValue) => {
        setFilters({ ...filters, ...formValue });
    };

    if (loading) {
        return (
            <div role="status" aria-live="polite">
                Loading...
            </div>
        );
    }

    if (error) {
        return <div role="alert">Error: {error}</div>;
    }

    if (properties.length === 0) {
        return <div role="alert">No properties found</div>;
    }

    return (
        <Layout>
            <div className="PropertyListing">
                <h2 className="title">Property Listings</h2>
                <SortAndFilter onSubmit={onSubmit} />
                <section className="PropertyListing__list" role="list" aria-label="property listings">
                    {properties.map((property, index) => (
                        <PropertyCard {...property} key={index} role="listitem" />
                    ))}
                </section>
            </div>
        </Layout>
    );
};

export default PropertyListing;
