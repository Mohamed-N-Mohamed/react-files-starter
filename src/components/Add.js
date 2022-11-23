import React from "react";
import styles from "./Add.module.css";

const Add = ({ setAddShoe, addShoe, setShoes, shoes }) => {
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setAddShoe((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImage = (e) => {
    const { name, files, type, value } = e.target;
    const imagePath = files[0].name;
    setAddShoe((prev) => {
      return {
        ...prev,
        [name]: imagePath,
      };
    });
  };

  const handleUpload = (e) => {
    //prevent default
    e.preventDefault();
    console.log(addShoe);
    setShoes([...shoes, addShoe]);
  };

  return (
    <div className={styles.add}>
      <h3>Add New Shoe</h3>
      <form className='add-form'>
        <div className={styles.formgroup}>
          <input
            type='text'
            placeholder='Name'
            className={styles.name}
            name='name'
            value={addShoe.name}
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type='file'
            name='image'
            // defaultValue={addShoe.image}
            className={styles.file}
            onChange={(e) => handleImage(e)}
          />
        </div>

        <button className={styles.addButton} onClick={handleUpload}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
