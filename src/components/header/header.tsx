import ToggleSwitch from "../toggleSwitch/toggleSwitch";

const Header = () => {
  return (
    <header className="w-100vw h-4/5 flex flex-row justify-between items-center py-4 px-20 shadow-md dark:bg-dark-bg">
      <div className="font-extrabold text-xl text-light-text dark:text-dark-text">Where in the world?</div>
        <ToggleSwitch/>
    </header>
  );
};

export default Header;
