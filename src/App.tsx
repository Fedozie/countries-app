import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import CardContainer from './components/cardContainer/cardContainer';
import './App.css';

const App = () => {

  return (
    <div className='w-100vw'>
      <Header/>
      <section className='w-full bg-light-bg dark:bg-dark-bg px-20 py-10'>
        <SearchBar/>
        <CardContainer/>
      </section>
    </div>
  )
}

export default App
