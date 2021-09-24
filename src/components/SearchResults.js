//Lesson 1:
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";
import InfoTabla from "./InfoTabla";
moment().format();

const SearchResults = ({ results }) => {
  const [profile, setProfile] = useState();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <InfoTabla result={result} key={index} setProfile={setProfile} />
          ))}
        </tbody>
      </table>

      {profile ? <CustomerProfile profile={profile} /> : null}
    </div>
  );
};

export default SearchResults;
// const SearchResults = props => {
//   const [backGround, setBackGround] = useState("bg-transparent");

//   const changeBackGround = () => {
//     backGround === "bg-transparent"
//       ? setBackGround("selectedRow")
//       : setBackGround("bg-transparent");
//   };

//   //console.log(props)
//   return (
//     <div className="table-bookings container d-flex">
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Title</th>
//             <th scope="col">First name</th>
//             <th scope="col">Surname</th>
//             <th scope="col">Email</th>
//             <th scope="col">Room ID</th>
//             <th scope="col">Check in date</th>
//             <th scope="col">Check out date</th>
//             <th scope="col">Nights</th>
//             <th scope="col">Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.results.map((item, index) => {
//             const checkOut = moment(item.checkOutDate, "YYYY-MM-DD");
//             const checkIn = moment(item.checkInDate, "YYYY-MM-DD");

//             //console.log(item);
//             return (
//               <tr className={backGround} key={index} onClick={changeBackGround}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.firstName}</td>
//                 <td>{item.surname}</td>
//                 <td>{item.email}</td>
//                 <td>{item.roomId}</td>
//                 <td>{item.checkInDate}</td>
//                 <td>{item.checkOutDate}</td>
//                 <td>{checkOut.diff(checkIn, "days")}</td>
//                 <td>
//                   <button className="btn btn-primary">Show profile</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <CustomerProfile />
//     </div>
//   );
// };

// export default SearchResults;
