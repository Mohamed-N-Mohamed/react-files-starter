import React from "react";
import styles from "./Footwear.module.css";
import img1 from "../images/active-states.jpg";

const Footwear = ({ shoes, handleOnClick }) => {
  return (
    <h1>Hello</h1>
    // <div className={styles.contaienr}>
    //   {shoes.map(({ name, price, image, id }) => (
    //     <div className={styles.shoes_card} key={id}>
    //       {/* <img src='../images/active-states.jpg' alt='' /> */}

    //       <img src={image ? image : img1} alt={name} className={styles.image} />
    //       <p>{name}</p>
    //       <h4>{price}</h4>
    //       <button className={styles.btn} onClick={() => handleOnClick(id)}>
    //         Update Name
    //       </button>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Footwear;
