import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Home = () => {
    return <Navigate to={ROUTES.PROPERTY_LIST} />;
};

export default Home;
