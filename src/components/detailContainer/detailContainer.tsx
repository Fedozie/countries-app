// import React from 'react';

const DetailContainer = ({ country}: any) => {
    
    console.log(country.currencies)
    country.currencies.forEach((currency: any) => console.log(currency.name))

  return (
    <div>
      <div>
        <button className="bg-dark-els p-4 shadonw-xl">Back</button>
      </div>
      <div className="flex">
        <div>
            <img src={country.flags.svg} alt="Country's Flag"/>
        </div>
        <div>
            <h3>{country.name}</h3>
            <div className="flex">
                <div>
                    <p><span>Native Name: </span>{country.nativeName}</p>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Region: </span>{country.region}</p>
                    <p><span>Sub Region: </span>{country.subregion}</p>
                    <p><span>Capital: </span>{country.capital}</p>
                </div>
                <div>
                    <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                    <p><span>Currencies: </span>{country.currencies.forEach((currency: any) => currency.name)}</p>
                    <p><span>Language: </span>{country.languages.forEach((language: any) => language.name)}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
