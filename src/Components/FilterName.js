import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const FilterName = () => {
  const {
    filterByName: { name },
    setFilterByName,
  } = useContext(MyContext);

  const handleInputText = ({ target }) => {
    setFilterByName({
      name: target.value,
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      name="name"
      value={ name }
      onChange={ handleInputText }
    />
  );
};

export default FilterName;
