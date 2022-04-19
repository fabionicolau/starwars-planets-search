import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const Table = () => {
  const {
    data,
    filterByName: { name },
    filterByNumericValues,
    isSorted,
    sortedPlanets,
  } = useContext(MyContext);

  const filteredByNumericValues = () => {
    let filtered = data;
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          filtered = filtered.filter((planet) => +planet[column] > +value);
        }
        if (comparison === 'menor que') {
          filtered = filtered.filter((planet) => +planet[column] < +value);
        }
        if (comparison === 'igual a') {
          filtered = filtered.filter((planet) => +planet[column] === +value);
        }
      });
    }
    return filtered;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Rotation Period </th>
            <th> Orbital Period </th>
            <th> Diameter </th>
            <th> Climate </th>
            <th> Gravity </th>
            <th> Terrain </th>
            <th> Surface Water </th>
            <th> Population </th>
            <th> Films </th>
            <th> Created </th>
            <th> Edited </th>
            <th> URL </th>
          </tr>
        </thead>
        <tbody>
          {(isSorted ? sortedPlanets() : filteredByNumericValues())
            .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
            .map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
