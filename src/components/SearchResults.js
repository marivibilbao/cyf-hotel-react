//Lesson 1:
import React from "react";

const SearchResults = props => {
  //console.log(props)
  return (
    <div className="table-bookings container d-flex">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results &&
            props.results.map((item, index) => {
              console.log(item);
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.firstName}</td>
                  <td>{item.surname}</td>
                  <td>{item.email}</td>
                  <td>{item.roomId}</td>
                  <td>{item.checkInDate}</td>
                  <td>{item.checkOutDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
