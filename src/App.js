import React from 'react';
import './App.css';
import MyProvider from './Context/MyProvider';
import Table from './Components/Table';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
