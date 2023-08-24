

interface DataProps {
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: any;
}



const CountryCard = ({name, flag, population, region, capital}: DataProps) => {
  return (
    <div className='w-max h-auto bg-dark-text rounded-lg border-none pb-8'>
        <div className="">
            <img src={flag} alt="Country's flag" className="rounded-t-lg"/>
        </div>
        <div className="p-4">
            <h4 className='font-bold text-xl text-light-text mt-8'>{name}</h4>
            <p className="text-light-text mt-8"><span className='font-semibold'>Population: </span>{population}</p>
            <p className="text-light-text"><span className='font-semibold'>Region: </span>{region}</p>
            <p className="text-light-text"><span className='font-semibold'>Capital: </span>{capital}</p>
        </div>
    </div>
  )
}

export default CountryCard;