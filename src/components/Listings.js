import React, { useEffect } from "react";
import "./main.scss";

import { useSelector } from "react-redux";
import ListingsCard from "./ListingCard"; // Import your ListingsCard component

const Listings = ({ listings }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < listings.length; i += 3) {
      const row = (
        <div className="row" key={i}  >
          {listings.slice(i, i + 3).map((listing, index) => (
            <ListingsCard
              key={index}
              listing={listing}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      );
      rows.push(row);
    }
    return (
      <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Your Search Listings
          </h3>
        </div>
        <div className="secContent grid">{rows}</div>
      </section>
    );
  };

  return <div>{generateRows()}</div>;
};

export default Listings;
