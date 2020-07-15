import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';

const StaticPages = () => {
  return (
    <React.Fragment>
      <Route path='/about-us' render={() => <AboutUs />} />
      <Route path='/contact-us' render={() => <ContactUs />} />
      <Route path='/delivery' render={() => <Delivery />} />
      <Route path='/payment' render={() => <Payment />} />
    </React.Fragment>
  )
}

export default StaticPages;