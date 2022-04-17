import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISONS = ['maior que', 'igual a', 'menor que'];

const FilterInputs = () => {
  const {
    setFilterByName,
    filterByName: { name },
    setFilterByNumericValues,
    filterByNumericValues,
    objectWithInputValues,
    setObjectWithInputValues,
  } = useContext(MyContext);

  const handleInputChange = ({ target: { value: values, name: names } }) => {
    if (names === 'name') {
      setFilterByName({
        name: values,
      });
    }
    if (names === 'column') {
      setObjectWithInputValues({
        ...objectWithInputValues,
        column: values,
      });
    }
    if (names === 'comparison') {
      setObjectWithInputValues({
        ...objectWithInputValues,
        comparison: values,
      });
    }
    if (names === 'value') {
      setObjectWithInputValues({
        ...objectWithInputValues,
        value: values,
      });
    }
  };

  const handleFilterButton = () => {
    setFilterByNumericValues((prev) => [...prev, objectWithInputValues]);
  };

  const deleteButton = (indexParam) => {
    const filter = filterByNumericValues
      .filter((_element, index) => index !== indexParam);
    setFilterByNumericValues(filter);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        value={ name }
        onChange={ handleInputChange }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleInputChange }
      >
        {COLUMNS.map((column, index) => (
          <option key={ index } value={ column }>
            { column }
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleInputChange }
      >
        {COMPARISONS.map((comparison, index) => (
          <option key={ index } value={ comparison }>
            { comparison }
          </option>))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ objectWithInputValues.value }
        onChange={ handleInputChange }
      />
      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleFilterButton }
      >
        FILTRAR

      </button>
      {filterByNumericValues.map((element, index) => (
        <div key={ index }>
          <p>{element.value}</p>
          <p>{element.column}</p>
          <p>{element.comparison}</p>
          <button type="button" onClick={ () => deleteButton(index) }>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default FilterInputs;
