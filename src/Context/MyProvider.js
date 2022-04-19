import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';
import fetchAPI from '../services/FetchApi';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [objectWithInputValues, setObjectWithInputValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [order, setOrder] = useState({});
  const [objectWithOrders, setObjectWithOrders] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const datas = await fetchAPI();
      const minus = -1;
      const plus = 1;
      const sortedData = datas.sort((a, b) => {
        const compareNames = a.name < b.name;
        return compareNames ? minus : plus;
      });
      setData(sortedData);
    };
    fetchData();
  }, []);

  const sortedPlanets = () => {
    const { column, sort } = order;
    if (sort === 'ASC') {
      return data
        .sort((a, b) => a[column].localeCompare(b[column]))
        .sort((a, b) => +a[column] - +b[column]);
    } if (sort === 'DESC') {
      return data
        .sort((a, b) => a[column].localeCompare(b[column]))
        .sort((a, b) => +b[column] - +a[column]);
    }
  };

  const context = {
    setObjectWithInputValues,
    setObjectWithOrders,
    setData,
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
    setIsSorted,
    filterByName,
    filterByNumericValues,
    data,
    objectWithInputValues,
    objectWithOrders,
    order,
    isSorted,
    sortedPlanets,
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
