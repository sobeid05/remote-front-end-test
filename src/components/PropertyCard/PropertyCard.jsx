import React from 'react';
import './PropertyCard.scss';
import PropTypes from 'prop-types';

const ImageAndPrice = ({ price, mainImage }) => (
    <div className="ImageAndPrice">
        {mainImage && (
            <div className="image">
                <img src={mainImage} alt="Property" />
            </div>
        )}
        {price && <div className="price">£ {price}</div>}
    </div>
);

const PropertyDetails = ({ propertyTitle, displayAddress, branchName, url, summary }) => (
    <div className="PropertyDetails">
        <a href={url}>
            <h1 className="propertyTitle">{propertyTitle}</h1>
            <p className="displayAddress">{displayAddress}</p>
            <p className="summary">{summary}</p>
        </a>
        <div className="agentInfo">
            <a href={'mailto:fakemail.fedtest@rightmove.co.uk'}>
                <span role="img" aria-hidden="true">
                    ✉️
                </span>
                <span>Contact {branchName}</span>
            </a>
        </div>
    </div>
);

const PropertyCard = ({ role, price, mainImage, propertyTitle, displayAddress, branchName, propertyUrl, summary }) => {
    return (
        <div className="PropertyCard">
            <ImageAndPrice price={price} mainImage={mainImage} />
            <PropertyDetails
                propertyTitle={propertyTitle}
                summary={summary}
                displayAddress={displayAddress}
                branchName={branchName}
                url={propertyUrl}
            />
        </div>
    );
};

PropertyCard.propTypes = {
    summary: PropTypes.string,
    displayAddress: PropTypes.string,
    propertyType: PropTypes.oneOf([
        'Flat',
        'Apartment',
        'Penthouse',
        'Semi-Detached',
        'Detached',
        'Terraced',
        'Duplex',
        'House',
        'Mews',
        'Boat',
        'Maisonette',
    ]),
    price: PropTypes.number,
    branchName: PropTypes.string,
    propertyUrl: PropTypes.string,
    contactUrl: PropTypes.string,
    propertyTitle: PropTypes.string,
    mainImage: PropTypes.string,
};

export default PropertyCard;
