import React, { useState } from "react";
import AlertMsg from './AlertMsg'

export default function TxtForm(props) {
  const [text, setText] = useState("Enter your text here to analyze");
  const [msgText, setMsgText] = useState("");

  const handelUpCLick = () => {
    // console.log("Uppercase was clicked");
    let updatedText = text.toUpperCase();
    setText(updatedText);
  };

  const handelLowCLick = () => {
    // console.log("Uppercase was clicked");
    let updatedText = text.toLowerCase();
    setText(updatedText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change invoked");
    setText(event.target.value);
  };

  const copyTxt = () => {
    var content = document.getElementById("Textarea");

    content.select();
    document.execCommand("copy");
    showAlert('Text copied')
  };

  const showAlert = (msg) => {
    setMsgText(msg);
  };

  return (
    <>
      <AlertMsg msg={msgText} />
      <div className="container my-4">
        <h1 className={`text-${props.theme === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Textarea"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
          <button className="btn btn-primary my-2 mx-1" onClick={handelUpCLick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handelLowCLick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={copyTxt}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className={`container my-2 text-${
          props.theme === "light" ? "dark" : "light"
        }`}
      >
        <h1>Text Summary</h1>
        <p>
          Your text contains {text.split(" ").length} words and {text.length}{" "}
          caracters
        </p>
      </div>
      <div
        className={`container text-${
          props.theme === "light" ? "dark" : "light"
        }`}
      >
        <h1>Preview</h1>
        <p>{text ? text : "You can preview your here"}</p>
      </div>
    </>
  );
}
