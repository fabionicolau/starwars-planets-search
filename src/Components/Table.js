import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Loading from './loading';

const Table = () => {
  const { planets, loading, filterByName: { name } } = useContext(MyContext);
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

              {planets.length > 0
          && planets
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
