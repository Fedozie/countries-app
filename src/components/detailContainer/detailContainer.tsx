// import React from 'react';

const DetailContainer = ({ country }: any) => {
  console.log(country.currencies);
  country.currencies.forEach((currency: any) => console.log(currency.name));

  return (
    <div>
      <div className="mb-16">
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
      <div className="flex">
        <div>
          <img src={country.flags.svg} alt="Country's Flag" />
        </div>
        <div>
          <h3>{country.name}</h3>
          <div className="flex">
            <div>
              <p>
                <span>Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              {country.currencies.forEach((currency: any) => (
                <p>
                  <span>Currency: </span>
                  {currency.name}
                </p>
              ))}
              {country.languages.forEach((language: any) => (
                <p>
                  <span>Language: </span> {language.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
