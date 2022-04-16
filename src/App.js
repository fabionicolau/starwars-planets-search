import React from 'react';
import './App.css';
import MyProvider from './Context/MyProvider';
import Table from './Components/Table';
import FilterInputs from './Components/FilterInputs';

function App() {
  return (
    <MyProvider>
      <FilterInputs />
      <Table />
    </MyProvider>
  );
}

export default App;
