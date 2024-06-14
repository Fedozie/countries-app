import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import HomePage from "../pages/homePage";
import DetailContainer from "../components/detailContainer/detailContainer";
import NoMatchPage from "../pages/noMatchPage";

import data from "../data/data.json";
import { CountryType } from "../utils";

const AppRoutes = () => {
  const navigate = useNavigate();
  const [countriesData] = useState<CountryType[]>(data);
  const [filteredCountriesData, setFilteredCountriesData] = useState<CountryType[]>(countriesData)
  const [detail, setDetail] = useState<CountryType>();

  // Function for handling the search functionality
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase().trim();

    const newCountriesArr = countriesData.filter((country) => {
      return country.name.toLowerCase().includes(lowerCaseQuery);
    }); 

    setFilteredCountriesData(newCountriesArr);
  };

  const handleDetail = (country: CountryType) => {
    navigate(`/${country.alpha3Code.toLowerCase()}`);
    setDetail(country);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              data={filteredCountriesData}
              handleSearch={handleSearch}
              handleDetail={handleDetail}
            />
          }
        />
        <Route path="/:slug" element={<DetailContainer country={detail} />} />

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
