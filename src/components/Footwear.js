import React from "react";
import styles from "./Footwear.module.css";

const Footwear = ({ shoes, handleOnClick }) => {
  return (
    <div className={styles.contaienr}>
      {shoes.map(({ name, price, image, id }) => (
        <div className={styles.shoes_card} key={id}>
          <img src={image} alt={name} className={styles.image} />
          <p>{name}</p>
          <h4>{price}</h4>
          <button className={styles.btn} onClick={() => handleOnClick(id)}>
            Update Name
          </button>
        </div>
      ))}
    </div>
  );
};

export default Footwear;
