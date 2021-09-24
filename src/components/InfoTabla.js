import React, { useState } from "react";
import moment from "moment";
moment().format();

export default function InfoTabla(props) {
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = props.result;

  const checkOut = moment(checkOutDate, "YYYY-MM-DD");
  const checkIn = moment(checkInDate, "YYYY-MM-DD");

  const [backGround, setBackGround] = useState("bg-transparent");

  const changeBackGround = () => {
    backGround === "bg-transparent"
      ? setBackGround("selectedRow")
      : setBackGround("bg-transparent");
  };

  const handleProfile = () => {
    props.setProfile(id);
  };

  return (
    <tr className={backGround} onClick={changeBackGround}>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleProfile}>
          Show profile
        </button>
      </td>
    </tr>
  );
}
