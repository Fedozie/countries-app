import { ChangeEvent } from "react";

interface SearchProps {
  handleSearch: (query: string) => void;
}

const SearchBar = ({ handleSearch }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <form className="sticky top-[10vh] bg-light-bg dark:bg-dark-bg py-10 px-20 flex justify-between mbl:flex-col mbl:px-5">
      <div className="flex justify-between items-center bg-dark-text w-3/12 rounded-lg p-1 dark:bg-dark-els mbl:w-full mbl:mb-10 tab:w-6/12">
        <button className="mx-4 peer mbl:mx-2 tab:mx-2">
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
          onChange={handleChange}
          type="text"
          placeholder="Search for a country..."
          name=""
          id=""
          className="placeholder:text-light-input cursor-pointer border-0 w-full dark:bg-dark-els dark:text-dark-text dark:placeholder:text-light-input mbl:text-sm tab:text-sm"
        />
      </div>

      <div>
        <select
          name=""
          id=""
          defaultValue={"placeholder"}
          className=" dark:bg-dark-els dark:text-dark-text"
        >
          <option value="placeholder" disabled>
            Filter by Region
          </option>
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
