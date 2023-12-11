import ToggleSwitch from "../toggleSwitch/toggleSwitch";

const Header = () => {
  return (
    <header className="w-full h-[10vh] flex flex-row justify-between items-center py-4 px-20 sticky top-0 shadow-md dark:bg-dark-els mbl:px-5 tab:px-10">
      <a href="/">
        <div className="font-extrabold text-xl text-light-text dark:text-dark-text mbl:text-base">
          Where in the world?
        </div>
      </a>
      <ToggleSwitch />
    </header>
  );
};

export default Header;
