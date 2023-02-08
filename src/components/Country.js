import axios from "axios";
import Card from "./Card";
import React, { useState, useEffect } from "react";
const Country = () => {
  const [data, setData] = useState([]);
  const [selectRegion, setSelectRegion] = useState("");
  console.log(selectRegion, "mappage");

  const listContinent = new Set(data.map((reg) => reg.region));
  const continent = ["", ...listContinent];
  console.log(listContinent, "listContinent");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="pays">
      <form className="center">
        <select
          className="browser-default"
          // Ecouteur d'évenements pour détecter le continent selectionné
          onChange={(e) => setSelectRegion(e.target.value)}
        >
          <option value="">Choose a Region</option>
          {continent.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>

      <div className="container">
        <div className="row">
          {data
            .filter((country) =>
              selectRegion ? country.region.includes(selectRegion) : true
            )
            .map((country, index) => (
              <div className="col s4 m4 l4">
                <Card key={index} country={country} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Country;
