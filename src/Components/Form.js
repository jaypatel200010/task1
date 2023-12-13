import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState("enter your name");
  // const [upperCaseText, setUpperCaseText] = useState("");

  const xyz = () => {
    let newtext = text.toUpperCase();
    // setUpperCaseText(newtext);
    setText(newtext);
  }

  const abc = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <div className='mb-3'>
          <h1>{props.home}</h1>
          <textarea className="form-control" id="myform" value={text} onChange={abc} rows="8"></textarea><br></br>
          <button className='btn btn-danger' onClick={xyz}>upper case</button>
        </div>
      </div>
      <div>
        {/* {upperCaseText} */}
        <hi>{text.split(" ").length} Word {text.length}Char</hi>
        <h1>{0.008 * text.split(" ").length}</h1>
        <p>{text}</p>
      </div>
    </>
  )
}
