import { useState } from "react";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/searchBar";
import CardContainer from "./components/cardContainer/cardContainer";
import "./App.css";
import DetailContainer from "./components/detailContainer/detailContainer";

const App = () => {
  const [detail, setDetail] = useState<string>("");

  const handleDetail = (country: any) => {
    setDetail(country);
  };

  const handleNavigate = () => {
    setDetail("")
  }

  const handleSearch = () => {
    console.log("Search Bar Clicked")
  }

  return (
    <section className = {`w-screen flex flex-col ${detail ? "h-screen" : "h-full"}`}>
      <Header />
      <section className="w-full h-full bg-light-bg flex-grow dark:bg-dark-bg px-20 py-10">
        {!detail ? (
          <div>
            <SearchBar handleSearch = {handleSearch} />
            <CardContainer handleDetail={handleDetail} />
          </div>
        ) : (
          <DetailContainer country={detail} handleNavigate={handleNavigate} />
        )}
      </section>
    </section>
  );
};

export default App;
