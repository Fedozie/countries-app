

interface DataProps {
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: string;
}



const CountryCard = ({name, flag, population, region, capital}: DataProps) => {
  return (
    <div className='w-56 h-56 bg-dark-text rounded-lg border-none p-4'>
        <div>
            <img src={flag} alt="Country's flag" />
        </div>
        <div>
            <h4 className='font-bold text-xl text-light-text'>{name}</h4>
            <p className="text-light-text"><span className='font-semibold'>Population: </span>{population}</p>
            <p className="text-light-text"><span className='font-semibold'>Region: </span>{region}</p>
            <p className="text-light-text"><span className='font-semibold'>Capital: </span>{capital}</p>
        </div>
    </div>
  )
}

export default CountryCard;