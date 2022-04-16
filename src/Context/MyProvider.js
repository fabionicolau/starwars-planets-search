import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/FetchApi';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchAPI();
      setPlanets(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const context = {
    planets, loading,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.object,
}.isRequired;

export default MyProvider;