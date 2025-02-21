import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";
/*import SearchResults from "./components/SearchResults";*/
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="container d-flex m-3 justify-content-center">
        <TouristInfoCards />
      </div>
      <Bookings />
      <Restaurant />
      {/*<SearchResults />*/}
      <Footer
        data={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
