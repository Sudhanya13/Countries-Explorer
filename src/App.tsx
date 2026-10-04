import { Suspense } from "react";
import Country from "./components/Country";

const Countriesdata = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await response.json();

  // data
  // console.log(data.countries);

  return data.countries;
};

const countrydata = Countriesdata();

// promise

console.log(countrydata);

function App() {
  return (
    <>
      <h1>World on the Go</h1>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Country countrydata={countrydata} />
      </Suspense>
    </>
  );
}

export default App;
