import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
const ListingDetail = ({ match }) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const slug = match.params.id;
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };

        const listingResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings/${slug}`,
          config
        );
        setListing(listingResponse.data);
        setPrice(numberWithCommas(listingResponse.data.price));

        if (listingResponse.data.realtor) {
          const realtorResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/realtors/${listingResponse.data.realtor}`,
            config
          );
          setRealtor(realtorResponse.data);
        }
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error("Error fetching listing data:", error);
      }
    };

    fetchListingData();
  }, [match.params.id]);

  const displayInteriorImages = () => {
    const interiorImages = [];

    for (let i = 1; i <= 20; i++) {
      const photoKey = `photo_${i}`;
      if (listing[photoKey]) {
        interiorImages.push(
          <div key={i} className="col-1-of-3">
            <div className="listingdetail__display">
              <img src={listing[photoKey]} alt="" />
            </div>
          </div>
        );
      }
    }

    return interiorImages;
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title>{`Realest Estate - Listing | ${listing.title}`}</title>
        <meta name="description" content="Listing detail" />
      </Helmet>
      <div className="listingdetail__header">
        <h1 className="listingdetail__title">{listing.title}</h1>
        <p className="listingdetail__location">
          {listing.city}, {listing.state}
        </p>
      </div>
      <div className="row">
        <div className="listingdetail__breadcrumb">
          <Link className="listingdetail__breadcrumb__link" to="/">
            Home
          </Link>{" "}
          / {listing.title}
        </div>
      </div>
      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={listing.photo_main}
              alt=""
            />
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={realtor.photo}
              alt=""
            />
          </div>
          <div className="listingdetail__realtor">
            <div className="listingdetail__realtor-content">
              <h3>{realtor.name}</h3>
              <a
                href={realtor.facebook_profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="listingdetail__footerSocials__icon" />
              </a>{" "}
            </div>
          </div>
          <p className="listingdetail__contact">{realtor.phone}</p>

          <p className="listingdetail__about">{realtor.description}</p>
        </div>
      </div>

      <div className="listing-card">
        <div className="row">
          <div className="col-1-of-2">
            <ul className="listingdetail__list">
              <li className="listingdetail__list__item">
                Home Type: {listing.home_type}
              </li>
              <li className="listingdetail__list__item">
                Sale Type: {listing.sale_type}
              </li>
              <li className="listingdetail__list__item">Price: da {price}</li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <ul className="listingdetail__list">
              <li className="listingdetail__list__item">
                Address: {listing.address}
              </li>
              <li className="listingdetail__list__item">
                City: {listing.city}
              </li>
              <li className="listingdetail__list__item">
                State: {listing.state}
              </li>
            </ul>
          </div>
        </div>
        <ul className="listingdetail__list">
          <li className="listingdetail__list__item">
            More Info: {listing.description}
          </li>
        </ul>
      </div>

      <div className="row">{displayInteriorImages()}</div>
    </div>
  );
};

export default ListingDetail;
