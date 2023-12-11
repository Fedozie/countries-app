import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface CountryProps {
  country: any;
}

const DetailContainer = ({ country }: CountryProps) => {
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {}, [slug]);

  useEffect(() => {
    //Functionality to remove commas if the languages are less than 2
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
    <section className="w-full h-auto px-20 py-10 dark:bg-dark-bg md:h-screen">
      <div className="w-full mb-12">
        <button
          className="w-36 p-3 bg-light-bg shadow-2xl rounded-lg flex justify-center items-center dark:bg-dark-els"
          onClick={() => navigate("/")}
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
      <div className="w-full flex gap-20 md:flex-col md:gap-10 lap:gap-4">
        <div className="w-1/2 md:w-full">
          <img
            src={country.flags.svg}
            alt={`${country.name}'s`}
            className="max-w-full"
          />
        </div>
        <div className="w-1/2 md:w-full">
          <h3 className="text-3xl font-semibold mb-4 text-light-text dark:text-dark-text">
            {country.name}
          </h3>
          <div className="flex gap-12 mbl:flex-col">
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

              <div className="flex flex-wrap gap-1">
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
          <div className="mt-20 flex flex-wrap justify-start items-center mbl:mt-10 mbl:flex-col">
            <p className="font-semibold text-dark-els dark:text-dark-text mbl:self-start mbl:mb-4">
              Border Countries:{" "}
            </p>
            <div className="flex flex-wrap mbl:flex mbl:self-start">
              {country.borders ? (
                country.borders.map((border: string, index: any) => (
                  <span
                    className="w-12 rounded shadow-md m-2 py-0.5 px-6 flex flex-wrap justify-center items-center text-sm dark:text-dark-text"
                    key={index}
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span className="ml-1 dark:text-dark-text mbl:ml-0">
                  No Border Countries
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContainer;
