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
    filterByNumericValues,
    setFilterByNumericValues,
    objectWithInputValues,
    setObjectWithInputValues,
  } = useContext(MyContext);

  const handleInputOptions = ({ target }) => {
    setObjectWithInputValues({
      ...objectWithInputValues,
      [target.name]: target.value,
    });
  };

  const handleFilterButton = () => {
    setFilterByNumericValues((prev) => [...prev, objectWithInputValues]);
  };

  const filterColumnsBySelect = () => {
    const selectedColumns = filterByNumericValues.map((filter) => filter.column);
    const filteredColumns = COLUMNS
      .filter((element) => !selectedColumns.includes(element));
    return filteredColumns;
  };

  const deleteFilterButton = (indexParam) => {
    const filter = filterByNumericValues
      .filter((_element, index) => index !== indexParam);
    setFilterByNumericValues([...filter]);
  };

  const deleteAllFilters = () => {
    setFilterByNumericValues([]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleInputOptions }
      >
        {filterColumnsBySelect()
          .map((column, index) => (
            <option key={ index } value={ column }>
              { column }
            </option>
          ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleInputOptions }
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
        onChange={ handleInputOptions }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterButton }
      >
        FILTRAR

      </button>

      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ deleteAllFilters }
      >
        REMOVER FILTROS

      </button>
      {filterByNumericValues.map((element, index) => (
        <div key={ index } data-testid="filter">
          <p>{`${element.column} ${element.comparison} ${element.value}`}</p>
          <button
            type="button"
            onClick={ () => deleteFilterButton(index) }
          >
            X

          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterInputs;
