import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { Rings } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Contact = ({ setAlert }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contacts/`, { name, email, subject, message }, config)
      .then((res) => {
        setAlert('Message Sent', 'success');
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setAlert('Error with Sending Message', 'error');
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className='contact'>
      <Helmet>
        <title>Realest Estate - Contact</title>
        <meta name='description' content='Contact us' />
      </Helmet>
      <div className='overlay'></div>

      <form className='contactContent' onSubmit={(e) => onSubmit(e)}>
        <label className='contactlabel' htmlFor='name'>
          Name*
        </label>
        <input
          className='contactinput'
          name='name'
          type='text'
          placeholder='Full Name'
          onChange={(e) => onChange(e)}
          value={formData.name}
          required
        />
        <label className='contactlabel' htmlFor='email'>
          Email*
        </label>
        <input
          className='contactinput'
          name='email'
          type='email'
          placeholder='example@gmail.com'
          onChange={(e) => onChange(e)}
          value={formData.email}
          required
        />
        <label className='contactlabel' htmlFor='subject'>
          Subject*
        </label>
        <input
          className='contactinput'
          name='subject'
          type='text'
          placeholder='Buying Home'
          onChange={(e) => onChange(e)}
          value={formData.subject}
          required
        />
        <label className='contactlabel' htmlFor='message'>
          Message
        </label>
        <textarea
          className='contacttextarea'
          name='message'
          cols='30'
          rows='10'
          placeholder='Message'
          onChange={(e) => onChange(e)}
          value={formData.message}
        />
        {loading ? (
          <div className='contactloader'>
            <Rings type='Oval' color='#424242' height={50} width={50} />
          </div>
        ) : (
          <button className='contactbutton' type='submit'>
            Send
          </button>
        )}
      </form>

      {loading && (
        <div className='contact__loader-overlay'>
          <div className='contact__loader'>
            <Rings type='Oval' color='#424242' height={100} width={100} />
          </div>
        </div>
      )}
    </div>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Contact);
