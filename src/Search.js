import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIoptions, GEO_API_URL } from "./api";

const Search = ({ onSearchChange }) => {
  const [citySearch, setCitySearch] = useState(null);

  const handleOnChange = (serachData) => {
    setCitySearch(serachData);
    onSearchChange(serachData);
  };

  const loadingOptions = async (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minminPopulation=1000&namePrefix=${inputValue}`,
      geoAPIoptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  return (
    <div className="searchContainer">
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={citySearch}
        onChange={handleOnChange}
        loadOptions={loadingOptions}
      />
    </div>
  );
};

export default Search;
