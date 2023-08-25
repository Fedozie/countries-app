
import CountryCard from "../countryCard/countryCard";
import data from '../../data.json';


const CardContainer = () => {

    return (
        <section className="grid grid-cols-4 gap-12">
            {data && data.map((country, index) => (
                <CountryCard
                    key = {index}
                    name = {country.name}
                    population = {country.population}
                    region = {country.region}
                    flag = {country.flags.png}
                    capital={country.capital}
                />
            ))}
        </section>
    );
}
 
export default CardContainer;