import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const SortInputs = () => {
  const {
    setOrder,
    setObjectWithOrders,
    objectWithOrders,
    setIsSorted,
  } = useContext(MyContext);

  const handleInputRadios = ({ target }) => (
    setObjectWithOrders({
      ...objectWithOrders,
      [target.name]: target.value,
    })
  );

  const sortPlanets = () => {
    setOrder(objectWithOrders);
    setIsSorted(true);
  };

  return (
    <div>
      <label htmlFor="asc">
        <input
          data-testid="column-sort-input-asc"
          id="asc"
          type="radio"
          name="sort"
          value="ASC"
          onChange={ handleInputRadios }
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          data-testid="column-sort-input-desc"
          id="desc"
          type="radio"
          name="sort"
          value="DESC"
          onChange={ handleInputRadios }
        />
        DESC
      </label>

      <select
        data-testid="column-sort"
        name="column"
        onClick={ handleInputRadios }
      >
        {COLUMNS
          .map((columns, index) => (
            <option key={ index } value={ columns }>
              { columns }
            </option>
          ))}
      </select>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ sortPlanets }
      >
        ORDENAR
      </button>
    </div>

  );
};

export default SortInputs;
