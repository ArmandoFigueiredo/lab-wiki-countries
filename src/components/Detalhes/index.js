import { Link, useParams } from "react-router-dom";

export function CountryDetails(props) {
  let { alpha3Code } = useParams();

  return (
    <div className="col-7">
      <h1>{alpha3Code.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            {alpha3Code.capital.map((currentCountry) => {
              return (
                <td>{currentCountry}</td>
              );
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>{alpha3Code.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {alpha3Code.borders.map((currentBorder) => {
                  return (
                    <li>
                      <Link to={`/${currentBorder}`}>
                        test
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}