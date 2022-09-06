import { Link } from "react-router-dom";
import style from "./style.module.css";

export function CountriesList(props) {
  return (
    <div className="col-5" style={{
      maxHeight: "90vh;", overflow: "scroll"
    }}>
      <div className="list-group">
        {props.countries.map((currentCountry) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${currentCountry.alpha3Code}`}
            >
              <img
                className={style.flag}
                src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`}
                alt={currentCountry.name.common}
              />
              {currentCountry.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}