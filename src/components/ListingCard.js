import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';

// Create a ListingsCard component
const ListingsCard = ({ listing }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const addressLimit = 50; // Adjust this to your desired limit

  // Truncate the address if it exceeds the limit
  const truncatedAddress = listing.address.length > addressLimit
    ? listing.address.slice(0, addressLimit) + "..."
    : listing.address;

    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <div className="singleDestination"data-aos="fade-right" >
      <div className="imageDiv">
        <img src={listing.photo_main} alt={listing.title} />
      </div>
      <div className="cardInfo">
        <h4 className="destTitle">{listing.title}</h4>
        <span className="continent flex">
          <HiOutlineLocationMarker className="icon" />
          <span className="name">{truncatedAddress}</span>
        </span>
        <div className="fees flex">
          <div className="grade" data-aos="">
            <span>{listing.state}</span>
          </div>
          <div className="price">
            <h5>da {listing.price}</h5>
          </div>
          
        </div>
        <div className="type flex">
          <div className="price">
            <h6>{listing.home_type}</h6>
          </div>
          <div className="price">
            <h5>{listing.sale_type}</h5>
          </div>
        </div>
        {isAuthenticated ? (
          <button className="btn flex">
            <Link to={`/listings/${listing.slug}`}>View Listing</Link>
            <HiOutlineClipboardCheck className="icon" />
          </button>
        ) : (
          <button className="btn flex">
            <Link to="/login">Login to View</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingsCard;
