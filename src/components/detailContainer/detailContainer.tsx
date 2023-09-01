// import React from 'react';

const DetailContainer = ({ country }: any) => {
  return (
    <div className="w-full">
      <div className="w-full mb-12">
        <button className="w-36 p-3 bg-light-bg shadow-2xl rounded-lg flex justify-center items-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <p className="ml-2">Back</p>
        </button>
      </div>
      <div className="w-full flex gap-32">
        <div className="w-1/2">
          <img src={country.flags.svg} alt="Country's Flag" />
        </div>
        <div className="w-1/2 ">
          <h3 className="text-3xl font-semibold mb-4 text-light-text">
            {country.name}
          </h3>
          <div className="flex gap-14">
            <div>
              <p className="mb-2">
                <span className="text-light-text font-semibold">
                  Native Name:{" "}
                </span>
                {country.nativeName}
              </p>
              <p className="mb-2 text-dark-bg">
                <span className="text-light-text font-semibold">
                  Population:{" "}
                </span>
                {country.population}
              </p>
              <p className="mb-2 text-dark-bg">
                <span className="text-light-text font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="mb-2 text-dark-bg">
                <span className="text-light-text font-semibold">
                  Sub Region:{" "}
                </span>
                {country.subregion}
              </p>
              <p className="mb-2 text-dark-bg">
                <span className="text-light-text font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="mb-2 text-dark-bg">
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              <div className="flex gap-1 mb-2">
              <span className="font-semibold">Currency: </span>
              {country.currencies.map((currency: any) => (
                <p>
                  {currency.name}
                </p>
              ))}
              </div>
              
              <div className="flex gap-1">
                <span className="mb-2 text-dark-bg font-semibold">Langauage:</span>
                {country.languages.map((language: any) => (
                    <p>
                     {language.name},
                    </p>
              ))}
              </div>
              
            </div>
          </div>
          <div className="mt-20 flex justify-start items-center">
            <p className="font-semibold text-dark-bg">Border Countries: </p>
            {country.borders &&
              country.borders.map((border: string) => (
                <span className="w-12 rounded shadow m-2 p-1 flex justify-center items-center">{border}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
