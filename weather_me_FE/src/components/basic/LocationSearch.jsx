import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const LocationSearch = () => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

  /* 
  function clearResults() {
    setCurrentQuery('');
    setSearchResults('');
  }

  window.onload = function() {
    clearResults();
  };
  */

  function SubmitCountryQuery() {
    const inputVal = document.getElementById("countrySearchInput").value;
    console.log(`before search${inputVal}`);
    setCurrentQuery(inputVal);
    CountrySearch();
  }

  async function CountrySearch() {
    console.log(`before call ${currentQuery}`);
    await axios
      .get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/countries-codes/records?select=onu_code%2C%20label_en&where=search(label_en%2C%20%22${currentQuery}%22)`
      )
      .then((res) => {
        console.log(`after call ${currentQuery}`);
        const result = res.data.results;
        console.log(`before set ${result}`);
        setSearchResults(result);
        console.log(`after set ${result}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>location setter</h1>
      <TextField id="countrySearchInput" label="Outlined" variant="outlined" />
      <Button variant="contained" onClick={SubmitCountryQuery}>
        Search Countries
      </Button>
      {searchResults ? (
        <div>
          <h3>Results</h3>
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>{item.label_en}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LocationSearch;
