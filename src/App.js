import { useState } from "react";
import Footwear from "./components/Footwear";
import data from "./shoes/data";
import "./App.css";
import Update from "./components/Update";

function App() {
  const [shoes, setShoes] = useState(data);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");

  console.log(shoes);

  //handle clicked function
  const handleOnClick = (id) => {
    setShoes(
      shoes.map((shoe) => {
        console.log(shoe);
        if (shoe.id === id && updateName.length > 1) {
          return { ...shoe, name: updateName };
        } else {
          return shoe;
        }
      })
    );

    setClicked(true);
  };

  return (
    <div className='App'>
      <h1>Welcome to JD</h1>
      <Footwear shoes={shoes} handleOnClick={handleOnClick} />
      <Update
        setUpdateName={setUpdateName}
        updateName={updateName}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
}

export default App;
