import { useState} from "react";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/searchBar";
import CardContainer from "./components/cardContainer/cardContainer";
import DetailContainer from "./components/detailContainer/detailContainer";
import data from "./data.json";

import "./App.css";
import { CountryType } from "./utils";

const App = () => {
  const [filteredData, setFilteredData] = useState<CountryType[]>(data);
  const [detail, setDetail] = useState<string>("");

  const handleDetail = (country: any) => {
    setDetail(country);
  };

  const handleNavigate = () => {
    setDetail("");
  };

  

  //Function for handling the search functionality
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = filteredData.filter((country) => {
      return country.name.toLowerCase().includes(lowerCaseQuery)
    })
    setFilteredData(filteredResults)
  };

  return (
    <section
      className={`w-screen flex flex-col ${detail ? "h-screen" : "h-full"}`}
    >
      <Header />
      <section className="w-full min-h-fit bg-light-bg flex-1 dark:bg-dark-bg px-20 py-10 mbl:px-8">
        {!detail ? (
          <div>
            <SearchBar handleSearch={handleSearch}  />
            <CardContainer handleDetail={handleDetail} data={filteredData} />
          </div>
        ) : (
          <DetailContainer country={detail} handleNavigate={handleNavigate} />
        )}
      </section>
    </section>
  );
};

export default App;
