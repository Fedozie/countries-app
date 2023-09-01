import ToggleSwitch from "../toggleSwitch/toggleSwitch";

interface StyleProps{
  sticky: string;
  top: any;
}

const Header = ({sticky, top}: StyleProps) => {
  return (
    <header className="w-100vw h-16 flex flex-row justify-between items-center py-4 px-20 shadow-md dark:bg-dark-els">
      <div className="font-extrabold text-xl text-light-text dark:text-dark-text">Where in the world?</div>
        <ToggleSwitch/>
    </header>
  );
};

export default Header;
