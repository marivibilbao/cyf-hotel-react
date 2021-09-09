//Lesson 1:
import React from "react";

const Footer = props => {
  //const data = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  const { data } = props;
  return (
    <div>
      <ul>
        {data.map((information, i) => (
          <li key={i}>{information}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
