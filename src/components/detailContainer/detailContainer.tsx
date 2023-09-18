import { useEffect } from "react";

interface CountryProps {
  country: any;
  handleNavigate: () => void;
}

const DetailContainer = ({ country, handleNavigate }: CountryProps) => {
  useEffect(() => {
    const removeComma = () => {
      const languages: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(".languages");
      const lastLanguage: HTMLDivElement = languages[languages.length - 1];
      const lastComma: HTMLSpanElement | null =
        lastLanguage.querySelector("span");

      if (lastComma) {
        lastLanguage.removeChild(lastComma);
      }
    };

    removeComma();
  }, []);

  return (
    <section className="w-full mb-32">
      <div className="w-full mb-12">
        <button
          className="w-36 p-3 bg-light-bg shadow-2xl rounded-lg flex justify-center items-center dark:bg-dark-els"
          onClick={handleNavigate}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <p className="ml-2 dark:text-dark-text">Back</p>
        </button>
      </div>
      <div className="w-full flex gap-32">
        <div className="w-1/2">
          <img src={country.flags.svg} alt="Country's Flag" className="" />
        </div>
        <div className="w-1/2 ">
          <h3 className="text-3xl font-semibold mb-4 text-light-text dark:text-dark-text">
            {country.name}
          </h3>
          <div className="flex gap-12">
            <div>
              <p className="mb-2 dark:text-dark-text">
                <span className="text-light-text font-semibold dark:text-dark-text">
                  Native Name:{" "}
                </span>
                {country.nativeName}
              </p>
              <p className="mb-2 text-dark-bg dark:text-dark-text">
                <span className="text-light-text font-semibold dark:text-dark-text">
                  Population:{" "}
                </span>
                {country.population.toLocaleString()}
              </p>
              <p className="mb-2 text-dark-bg dark:text-dark-text">
                <span className="text-light-text font-semibold dark:text-dark-text">
                  Region:{" "}
                </span>
                {country.region}
              </p>
              <p className="mb-2 text-dark-bg dark:text-dark-text">
                <span className="text-light-text font-semibold dark:text-dark-text">
                  Sub Region:{" "}
                </span>
                {country.subregion}
              </p>
              <p className="mb-2 text-dark-bg dark:text-dark-text">
                <span className="text-light-text font-semibold dark:text-dark-text">
                  Capital:{" "}
                </span>
                {country.capital ? country.capital : "No Capital City"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-dark-bg dark:text-dark-text">
                <span className="font-semibold dark:text-dark-text">
                  Top Level Domain:{" "}
                </span>
                {country.topLevelDomain}
              </p>
              <div className="flex gap-1 mb-2">
                <span className="font-semibold dark:text-dark-text">
                  Currency:{" "}
                </span>
                {country.currencies.map((currency: any, index: any) => (
                  <p key={index} className="dark:text-dark-text">
                    {currency.name}
                  </p>
                ))}
              </div>

              <div className="flex gap-1">
                <span className="mb-2 text-dark-els font-semibold dark:text-dark-text">
                  Langauage:
                </span>
                {country.languages.map((language: any, index: any) => (
                  <p key={index} className="languages dark:text-dark-text">
                    {language.name}
                    <span className="">,</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-start items-center">
            <p className="font-semibold text-dark-els dark:text-dark-text">
              Border Countries:{" "}
            </p>
            {country.borders ? (
              country.borders.map((border: string, index: any) => (
                <span
                  className="w-12 rounded shadow m-2 py-0.5 px-6 flex justify-center items-center text-sm dark:text-dark-text"
                  key={index}
                >
                  {border}
                </span>
              ))
            ) : (
              <span className="ml-1 dark:text-dark-text">
                No Border Countries
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContainer;
