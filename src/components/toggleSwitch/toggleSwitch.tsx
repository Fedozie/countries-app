import { useState, useEffect} from "react";


const ToggleSwitch = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


  return (
    <button className="flex" onClick = {handleSwitch}>
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
      <p className="font-semibold text-light-text dark:text-dark-text">Dark Mode</p>
    </button>
  );
};

export default ToggleSwitch;
