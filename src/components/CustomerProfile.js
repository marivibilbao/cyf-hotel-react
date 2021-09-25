//import React from "react";
import React, { useEffect, useState } from "react";

export default function CustomerProfile({ profile }) {
  const [customerProfile, setCustomerProfile] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${profile}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [customerProfile]);

  return (
    <div>
      <h3 className="d-flex justify-content-center">
        Customer {customerProfile.id} profile
      </h3>
      <ul class="search-wrapper">
        <li className="d-flex justify-content-center">
          <b>ID:</b> {customerProfile.id}
        </li>
        <li className="d-flex justify-content-center">
          <b>Email:</b> {customerProfile.email}
        </li>
        <li className="d-flex justify-content-center">
          <b>VIP:</b> {customerProfile.vip ? "YES" : "NO"}
        </li>
        <li className="d-flex justify-content-center">
          <b>Phone:</b> {customerProfile.phoneNumber}
        </li>
      </ul>
    </div>
  );
}
