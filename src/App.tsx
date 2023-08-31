import { useState } from "react";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/searchBar";
import CardContainer from "./components/cardContainer/cardContainer";
import "./App.css";
import DetailContainer from "./components/detailContainer/detailContainer";

const App = () => {
  const [detail, setDetail] = useState<string>("");

  const handleNavigate = (country: any) => {
    setDetail(country);
  };

  return (
    <div className="w-100vw">
      <Header />
      <section className="w-full bg-light-bg dark:bg-dark-bg px-20 py-10">
        <SearchBar />
        {!detail ? (
          <CardContainer handleNavigate={handleNavigate} />
        ) : (
          <DetailContainer country={detail} handleNavigate={handleNavigate} />
        )}
      </section>
    </div>
  );
};

export default App;
