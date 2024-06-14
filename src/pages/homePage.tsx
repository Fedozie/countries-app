import SearchBar from "../components/searchBar/searchBar";
import CardContainer from "../components/cardContainer/cardContainer";
import { CountryType } from "../utils";

interface HomeProps {
  data: CountryType[];
  handleSearch: (query: string) => void;
  handleDetail: (country: CountryType) => void;
}

const HomePage = ({ handleSearch, handleDetail, data }: HomeProps) => {
  return (
    <section className="w-screen min-h-max bg-light-bg dark:bg-dark-bg">
      <SearchBar handleSearch={handleSearch} />
      <section className="w-full h-auto bg-light-bg flex-1 dark:bg-dark-bg px-20 py-10 mbl:px-10">
        <CardContainer handleDetail={handleDetail} data={data} />
      </section>
    </section>
  );
};

export default HomePage;
