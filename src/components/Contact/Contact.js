import React from 'react';
import './Contact.css'
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className='contact-box'>
      <Helmet>
        <title>Veegana - Contact Us</title>
      </Helmet>
      <h2>Don't be a Stranger!</h2>
      <p>veegana@dummymail.dummycom</p>
      {}
    </div>
  );
};

export default Contact;