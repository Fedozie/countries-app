

import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import CardContainer from "../components/cardContainer/cardContainer";
import { CountryType } from "../utils";

interface HomeProps {
    data: CountryType[];
    handleSearch: (query: string) => void;
    handleDetail: (country: any) => void;
}

const HomePage = ({handleSearch, handleDetail, data}: HomeProps) => {
  return (
    <section className="w-screen">
      <Header />
      <section className="w-full min-h-max bg-light-bg flex-1 dark:bg-dark-bg px-20 py-10 mbl:px-8">
        <SearchBar handleSearch={handleSearch} />
        <CardContainer handleDetail={handleDetail} data={data} />
      </section>
    </section>
  );
};

export default HomePage;
