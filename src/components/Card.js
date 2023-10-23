import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // Import connect



const Card = (props) => {
    const { isAuthenticated } = props;
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className='card'>
            <h3 className='card__title'>{props.title}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={props.photo_main} alt='House' />
            </div>
            <p className='card__location'>{props.address}, {props.city}, {props.state}</p>
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Price: da {numberWithCommas(props.price)}</p>

                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{props.sale_type}</p>
                    <p className='card__hometype'>{props.home_type}</p>
                </div>
            </div>
            {isAuthenticated ? (
                <Link className='card__link' to={`/listings/${props.slug}`} >View Listing</Link>
            ):(
                <Link className='card__link' to ="/login" >
                    Login to View
                </Link>

            )}
           
    

            
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale_type: PropTypes.string.isRequired,
    home_type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  export default connect(mapStateToProps)(Card);