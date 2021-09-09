import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
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
