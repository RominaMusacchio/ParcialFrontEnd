import React from "react";
import CardStyles from "../Styles/Card.module.css";

const Card = ({ nombre, banda }) => {
  return (
    <>
      <div className={CardStyles.card}>
        <div>
          Gracias por compartirlo {nombre}!
        </div>
        <div>{banda} es una gran banda</div>
      </div>

    </>
  );
};

export default Card;
