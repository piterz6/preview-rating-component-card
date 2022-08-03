import React, { useState } from "react";
import Content from "./Content";
import Modal from "./Modal";
import "./App.css";
const App = () => {
  const [value, setValue] = useState();
  const [showModal, setShowModal] = useState();
  return (
    <>
      {!showModal && (
        <Content
          changeValue={(value) => setValue(value)}
          modalHandler={(modalValue) => setShowModal(modalValue)}
        />
      )}
      {showModal && <Modal modalValue={value} messageValue={value} />}
    </>
  );
};
export default App;
