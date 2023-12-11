import "./App.css";
import AppRoutes from "./routes/appRoutes";

const App = () => {
  
  

  return (
    // <section
    //   className={`w-screen flex flex-col ${detail ? "h-screen" : "h-full"}`}
    // >
    //   <Header />
    //   <section className="w-full min-h-max bg-light-bg flex-1 dark:bg-dark-bg px-20 py-10 mbl:px-8">
    //     {!detail ? (
    //       <div>
    //         <SearchBar handleSearch={handleSearch}  />
    //         <CardContainer handleDetail={handleDetail} data={filteredData} />
    //       </div>
    //     ) : (
    //       <DetailContainer country={detail} handleNavigate={handleNavigate} />
    //     )}
    //   </section>
    // </section>
   <AppRoutes/>
  );
};

export default App;
