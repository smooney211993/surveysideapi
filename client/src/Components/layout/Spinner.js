import React from 'react';
import PropTypes from 'prop-types';
import spinner from '../../img/spinner.gif';

const Spinner = (props) => {
  return (
    <>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='loading'
      />
    </>
  );
};

export default Spinner;
