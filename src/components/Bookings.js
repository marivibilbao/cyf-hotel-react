//import React from "react";
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState();
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(bookingData => {
        //console.log(bookingData);
        setBookings(bookingData);
      });
  }, []);

  const search = searchVal => {
    const searchText = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log("test", searchText);
    console.info("TO DO!", searchVal);
    setBookings(searchText);
  };

  //console.log(FakeBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? <SearchResults results={bookings} /> : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default Bookings;
