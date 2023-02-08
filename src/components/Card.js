import React from "react";

const Card = ({ country }) => {
  return (
    <>
      {/* <img src={country.flags.svg} alt={"drapeau"} />
      <div className="infos">
        <h2>
          {country.translations.fra.common} ({country.flag})
        </h2>
        <h3>{country.region}</h3>
        <h4>{country.capital}</h4>
        <p>pop.{country.population.toLocaleString()}</p>
      </div> */}
      <div className="card vertical">
        <div className="card-image">
          <div class="card-image">
            <img src={country.flags.svg} alt={"drapeau"} />
          </div>
          <div className="card-stached">
            <div className="card-content">
              <h2>
                {country.translations.fra.common} ({country.flag})
              </h2>

              <h3>{country.region}</h3>
              <h4>{country.capital}</h4>
              <p>pop.{country.population.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
