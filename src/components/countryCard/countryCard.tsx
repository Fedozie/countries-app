interface DataProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: any;
  onClick?: () => void;
}

const CountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
  onClick,
}: DataProps) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className="w-auto h-auto bg-dark-text rounded-lg border-none pb-8 cursor-pointer hover:shadow-xl dark:bg-dark-els dark:hover:shadow-none"
    >
      <div className="">
        <img
          src={flag}
          alt="Country's flag"
          className="rounded-t-lg h-36 w-full object-cover"
        />
      </div>
      <div className="p-4 text-light-text dark:text-dark-text">
        <h4 className="font-bold text-xl mt-8">{name}</h4>
        <p className="mt-8">
          <span className="font-semibold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p className="">
          <span className="font-semibold">Capital: </span>
          {capital ? capital : "No Capital City"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
