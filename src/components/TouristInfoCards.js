//Lesson 1:
import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container d-flex m-3 justify-content-center">
      <div className="card p-2">
        <img
          src="https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">Glasgow</h4>
          <p className="card-paragraph">
            Es una ciudad y un consejo de Escocia, en el Reino Unido. Es la
            mayor ciudad de Escocia y la tercera del Reino Unido después de
            Londres y Birmingham, y es el consejo más poblado y la décima área
            metropolitana más poblada del Reino Unido en su conurbación Gran
            Glasgow, tras el Gran Londres.
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
      <div className="card p-2">
        <img
          src="https://st2.depositphotos.com/3197629/6753/i/600/depositphotos_67533247-stock-photo-castlefield-manchester-uk.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">Manchester</h4>
          <p className="card-paragraph">
            Es una ciudad y un municipio metropolitano del condado de Gran
            Mánchester en Inglaterra, Reino Unido. Obtuvo su estatus de ciudad
            en 1853 y tenía una población estimada de 530 300 habitantes en 2015
            con una población urbana de 3,2 millones.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
      <div className="card p-2">
        <img
          src="https://images.musement.com/cover/0002/49/big-ben-westminster-bridge-on-river-thames-in-london-jpg_header-148518.jpeg?w=1200&h=630&q=95&fit=crop"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">London</h4>
          <p className="card-paragraph">
            Es la capital y mayor ciudad de Inglaterra y del Reino Unido.​
            Situada a orillas del río Támesis, Londres es un importante
            asentamiento humano desde que fue fundada por los romanos con el
            nombre de Londinium hace casi dos milenios.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
