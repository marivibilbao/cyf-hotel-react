import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(bookingData => {
        setBookings(bookingData);
      });
  }, []);

  const search = searchVal => {
    const x = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log("test", x);
    console.info("TO DO!", searchVal);
    setBookings(x);
  };

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
