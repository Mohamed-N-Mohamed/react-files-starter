import React from "react";
import styles from "./Update.module.css";

const Update = ({ setUpdateName, updateName, setClicked, clicked }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    //set updated name
    setUpdateName(value);

    //set handle clicked to false
    setClicked(false);
  };
  return (
    <div className={styles.update}>
      <form className={styles.form}>
        <label>Update Name</label>
        <input type='text' className={styles.input} onChange={(e) => handleOnChange(e)} />
        {updateName.length === 0 && clicked && <div className={styles.error}>Type a name</div>}
      </form>
    </div>
  );
};

export default Update;
