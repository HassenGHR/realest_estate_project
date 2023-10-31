import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ListingsCard from "../components/ListingCard";
import Pagination from "../components/Pagination";
import "../components/main.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings/?page=1`
        );

        setListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);

        // Initialize AOS here for the initial content
        Aos.init({ duration: 2000 });
      } catch (err) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const visitPage = (page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/listings/?page=${page}`)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(page);

        // Refresh AOS to apply animations to new content
        Aos.refresh();
      })
      .catch((err) => {
        // Handle error
      });
  };

  const previous_number = () => {
    if (previous) {
      axios
        .get(previous)
        .then((res) => {
          setListings(res.data.results);
          setPrevious(res.data.previous);
          setNext(res.data.next);
          setActive(active - 1);

          // Refresh AOS to apply animations to new content
          Aos.refresh();
        })
        .catch((err) => {
          // Handle error
        });
    }
  };

  const next_number = () => {
    if (next) {
      axios
        .get(next)
        .then((res) => {
          setListings(res.data.results);
          setPrevious(res.data.previous);
          setNext(res.data.next);
          setActive(active + 1);

          // Refresh AOS to apply animations to new content
          Aos.refresh();
        })
        .catch((err) => {
          // Handle error
        });
    }
  };

  return (
    <main className="main container">
      <Helmet>
        <title>Realest Estate - Listings</title>
        <meta name="description" content="Listings page" />
      </Helmet>
      <div className="overlay"></div>
      <section className="main container section">
        <div className="secContent flex" data-aos="fade-right">
          {listings.map((listing, index) => (
            <ListingsCard key={index} listing={listing}  />
          ))}
        </div>
      </section>
      <section className="listings__pagination">
        <div className="row">
          <Pagination
            itemsPerPage={3}
            count={count}
            visitPage={visitPage}
            previous={previous_number}
            next={next_number}
            active={active}
            setActive={setActive}
          />
        </div>
      </section>
    </main>
  );
};

export default Listings;
