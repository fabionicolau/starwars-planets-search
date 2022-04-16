import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const FilterInputs = () => {
  const { setFilterByName, filterByName: { name } } = useContext(MyContext);

  const handleInputChange = ({ target: { value } }) => {
    setFilterByName({
      name: value,
    });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="text"
        value={ name }
        onChange={ handleInputChange }
      />
    </div>
  );
};

export default FilterInputs;
