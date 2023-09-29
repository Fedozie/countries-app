import { ChangeEvent } from "react";


interface SearchProps {
  handleSearch : (query:string) => void;
}

const SearchBar = ({handleSearch,}: SearchProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    handleSearch(query);
  }
  



  return (
    <form className="flex justify-between mb-10">
      <div className="flex items-center bg-dark-text w-3/12 rounded-lg p-1 dark:bg-dark-els ">
        <button className="mx-4 peer">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        <input
          onChange = {handleChange}
          type="text"
          placeholder="Search for a country..."
          name=""
          id=""
          className="placeholder:text-light-input cursor-pointer border-0 w-full dark:bg-dark-els dark:text-dark-text dark:placeholder:text-dark-text"
        />
      </div>

      <div>
        <select name="" id="" defaultValue={'placeholder'} className=" dark:bg-dark-els dark:text-dark-text">
            <option value="placeholder" disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
