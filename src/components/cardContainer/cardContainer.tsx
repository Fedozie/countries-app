import CountryCard from "../countryCard/countryCard";
import type {CountryType} from "../../utils";


interface CardsProps {
  handleDetail: (country: any) => void;
  data: CountryType[];
}


const CardContainer = ({handleDetail, data}: CardsProps) => {

  return (
    <section className="grid grid-cols-4 gap-12">
      {data &&
        data.map((country, index) => (
          <CountryCard
            key={index}
            name={country.name}
            population={country.population}
            region={country.region}
            flag={country.flags.png}
            capital={country.capital}
            onClick = {()=>handleDetail(country)}
          />
        ))}
    </section>
  );
};

export default CardContainer;
