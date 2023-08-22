const Header = () => {
  return (
    <header className="w-100vw h-4/5 flex flex-row justify-between items-center py-4 px-20 shadow">
      <div className="font-extrabold text-xl text-light-text">Where in the world?</div>
      <div className="flex">
        <svg
          className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
          />
        </svg>
        <div className="font-semibold text-light-text">Dark Mode</div>
      </div>
    </header>
  );
};

export default Header;
