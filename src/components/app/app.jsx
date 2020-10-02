import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {rentalOffersCount} = props;

  return (
    <Main rentalOffersCount={rentalOffersCount} />
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
};

export default App;
