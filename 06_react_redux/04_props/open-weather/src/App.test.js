import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const mockImplementation = require('./mockImplementation.js');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


import { fetchLocationByAdress } from "./openWeather.js";

test("fetchLocationByAdress: it gives a loction for an address", () => {
  const expectedResult = {latitude: 50.62925, longitude: 3.057256};
  const address = 'Lille';
  return fetchLocationByAdress(address)
    .then(location => {
      expect(location).toEqual(expectedResult);
    })
});


const fakeFetch = jest.fn()
  .mockImplementation(() =>
    Promise.resolve({
      json: function() {
        return Promise.resolve({latitude: 50.62925, longitude: 3.057256});
      }
    })
  );

test("fetchLocationByAdress: it gives a loction for an address 2", () => {
  const expectedResult = {latitude: 50.62925, longitude: 3.057256};
  const address = 'Lille';
  return fetchLocationByAdress(fakeFetch)
    .then(location => {
      expect(location).toEqual(expectedResult);
      expect(fakeFetch).toHaveBeenCalled();
      expect(fakeFetch).toHaveBeenCalledWith(`${encodeURI(address)}&key=${GOOGLE_PLACES_API_KEY}`);
    });
});
