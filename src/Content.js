import React, { useState } from "react";
import Font from "./Font";

//catching value of pressed button and passing to parent
const Content = (props) => {
  const [modalShow, setModalShow] = useState(null);
  const valueHandler = (e) => {
    e.preventDefault();
    setModalShow(e.target.value);
    props.changeValue(e.target.value);
  };

  //Submit handler - showing modal message
  const submitHandler = (e) => {
    e.preventDefault();
    if (modalShow === null) return null;
    else {
      return props.modalHandler(true);
    }
  };
  return (
    <div className="container">
      <button className="rounded2">
        <Font />
      </button>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form action="submit">
        <div className="buttons">
          <button className="rounded" value="1" onClick={valueHandler}>
            1
          </button>
          <button className="rounded" value="2" onClick={valueHandler}>
            2
          </button>
          <button className="rounded" value="3" onClick={valueHandler}>
            3
          </button>
          <button className="rounded" value="4" onClick={valueHandler}>
            4
          </button>
          <button className="rounded" value="5" onClick={valueHandler}>
            5
          </button>
        </div>
        <button className="submit" onClick={submitHandler}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Content;
