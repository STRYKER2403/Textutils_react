import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");

    const UpHandle = (e)=> {
        e.preventDefault();  //To Stop page from Reloading
        console.log("Uppercase Was Clicked");
        let NewText = text.toUpperCase();
        setText(NewText);
    }

    const Onnchange = (event)=> {
        console.log("Typing...");
        setText(event.target.value)
    }

    const LoHandle = (e)=> {
        e.preventDefault();  //To Stop page from Reloading
        console.log("Lowercase Was Clicked");
        let NewText = text.toLowerCase();
        setText(NewText);
    }


    return (
    <>
    <form className="container">
  
        <div className="mb-3 my-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} id="myBox" rows = "8" onChange={Onnchange}></textarea>
        </div>
        
        <button className="btn btn-primary" onClick={UpHandle}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={LoHandle} >Convert to Lowercase</button>
        
        
    </form>

    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>

    <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
  
    </>
  )
}
