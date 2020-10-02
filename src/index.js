import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  RENTAL_OFFERS_COUNT: 312
};

ReactDOM.render(
    <App rentalOffersCount={Settings.RENTAL_OFFERS_COUNT}/>,
    document.querySelector(`#root`)
);
