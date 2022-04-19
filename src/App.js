import React from 'react';
import MyProvider from './Context/MyProvider';
import Table from './Components/Table';
import Header from './Components/Header';
import FilterInputs from './Components/FilterInputs';
import FilterName from './Components/FilterName';
import SortInputs from './Components/SortInputs';

function App() {
  return (
    <MyProvider>
      <Header />
      <FilterName />
      <FilterInputs />
      <SortInputs />
      <Table />
    </MyProvider>
  );
}

export default App;
