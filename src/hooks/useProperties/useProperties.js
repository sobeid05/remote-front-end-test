import { useState, useEffect } from 'react';

const useProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchProperties = async (url) => {
            try {
                setLoading(true);

                const response = await fetch(`http://localhost:3000/api/properties`);
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
    }, []);

    return { getProperties, properties, loading, error };
};

export default useProperties;
