const SearchBar = () => {
  return (
    <form className="flex justify-between mb-10">
      <div className="flex items-center bg-dark-text w-3/12">
        <button className=" mx-4">
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
          type="text"
          placeholder="Search for a country..."
          name=""
          id=""
          className="border-0 outline-0 bg-dark-text w-full"
        />
      </div>

      <div>anii</div>
    </form>
  );
};

export default SearchBar;
