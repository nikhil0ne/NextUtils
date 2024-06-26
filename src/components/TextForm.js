import React, { useState } from "react";

const TextForm = (props) => {
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase ","success ")
    };
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase ","success ")
    };
    const handleClear=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success ")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard","success")
    }
    const [text, setText] = useState("Enter text here ...");
    return (
        <>
            <div className={`container text-${props.color}`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="mytext"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpperCase}>
                    Convert to UpperCase
                </button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.color}`}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  and  {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length===0?"Enter text in the text box to preview it..":text}</p>
            </div>
        </>
    );
};

export default TextForm;
