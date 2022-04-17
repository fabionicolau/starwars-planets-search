import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Loading from './loading';

const Table = () => {
  const {
    planets,
    loading,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(MyContext);

  const filteredByNumericValues = () => {
    if (filterByNumericValues.length > 0) {
      const {
        column,
        comparison,
        value,
      } = filterByNumericValues[filterByNumericValues.length - 1];

      if (comparison === 'maior que') {
        return planets.filter((planet) => parseInt(planet[column], 10) > value);
      }
      if (comparison === 'menor que') {
        return planets.filter((planet) => parseInt(planet[column], 10) < value);
      }
      if (comparison === 'igual a') {
        return planets.filter((planet) => planet[column] === value);
      }
    }
    return planets;
  };

  return (
    <div>
      {loading
        ? <Loading />
        : (
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>rotation period</th>
                <th>orbital period</th>
                <th>diameter</th>
                <th>climate</th>
                <th>gravity</th>
                <th>terrain</th>
                <th>surface water</th>
                <th>population</th>
                <th>Films</th>
                <th>created</th>
                <th>edited</th>
                <th>url</th>
              </tr>
            </thead>
            <tbody>
              {filteredByNumericValues()
                .filter((planet) => planet.name.includes(name))
                .map((planet, index) => (
                  <tr key={ index }>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                    <td>{planet.films.map((film) => film)}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
    </div>
  );
};

export default Table;
