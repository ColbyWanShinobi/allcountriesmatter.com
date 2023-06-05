import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Flag from 'react-world-flags'
//import Countries from 'world-countries';

import TitleBar from '../TitleBar/TitleBar';
import IndependenceDay from '../IndependenceDay/IndependenceDay';


import './Main.css';


function Main() {
  const [countries, setCountries] = useState([]);
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  useEffect(() => {
    // Fetch country data from an API or use a static JSON file
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Sort countries by name
        const sortedCountries = data.sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setCountries(sortedCountries);
      })
      .catch(error => {
        console.log('Error fetching country data:', error);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <TitleBar/>
      <p>{formattedDate}</p>
      <p>As of today, we have celebrated the independence of our nation from the unjust rule of the British Monarchy <IndependenceDay/> times</p>
      <p>But our country shouldn't be the only one to be celebrated. In the pursuit of true equality, it would be inappropriate to focus on just ONE country when ALL COUNTRIES deserve to be celebrated.</p>     
      <p>So please spend some time this Fourth of July thinking about, and learning about any other country BESIDES The United States of America. I've providea a list of them below.</p>
      <p>Because at the end of the day, despite what may be going on in the United States of America right now, we should never loose sight of the fact that...</p>
      <p><a href='https://twitter.com/hashtag/AllCountriesMatter' target="_blank" rel="noreferrer">#ALLCOUNTRIESMATTER</a></p>
      <div className='world-box'>
      {countries.map(country => {
        console.log(country);
        if (country.cca2 !== 'US' && country.cca2 !== 'UM' && country.cca2 !== 'AQ') {
          return (
            <div className='independent-box' key={country.cca2}>
              <a href={country.maps.googleMaps} target="_blank" rel="noreferrer"><Flag code={country.cca2} height='128' className='flag'/></a>
              <br/>
              <span className='country-name'>{country.name.common}</span>
              <br/>
              Official Name: {country.name.official}
              <br/>
              Region: {country.region}
              <br/>
              Capital: {country.capital}
              <br/>
              Independent: {country.independent ? 'Yes' : 'No'}
              <br/>
              UN Member: {country.unMember ? 'Yes' : 'No'}
              <br/>
              <br/>
              <br/>
            </div>
          )
        }
        return null;
      })}
      
      
      
      
      </div>
    </Container>
  );
}

export default Main;
