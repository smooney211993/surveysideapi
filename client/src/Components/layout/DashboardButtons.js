import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const DashboardButtons = (props) => {
  return (
    <section id='actions' className='py-4 mb-4 '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <StripeCheckout
              amount={500}
              token={(token) => console.log(token)}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}>
              <button className='btn btn-primary btn-block'>
                <i className='fas fa-plus'></i> Add Credits
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardButtons.propTypes = {};

export default DashboardButtons;
