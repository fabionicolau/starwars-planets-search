import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/FetchApi';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [objectWithInputValues, setObjectWithInputValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

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
    planets,
    loading,
    setPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    setObjectWithInputValues,
    objectWithInputValues,
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
