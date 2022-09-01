import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const UpHandle = (e)=> {
        e.preventDefault();  //To Stop page from Reloading
        // console.log("Uppercase Was Clicked");
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Converted To Upper Case","success");
    }

    const Onnchange = (event)=> {
        // console.log("Typing...");
        setText(event.target.value)
    }

    const LoHandle = (e)=> {
        e.preventDefault();  //To Stop page from Reloading
        // console.log("Lowercase Was Clicked");
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("Converted To Lower Case","success");
    }

    const ClearHandle = (e)=> {
        e.preventDefault();  //To Stop page from Reloading
        let Newtext = "";
        setText(Newtext);
        props.showAlert("Text Cleared","success");
    }

    return (
    <>
    <form className="container my-3" style = {{color: props.mode === "light" ? "black" : "white"}}>
  
        <div className="mb-3 my-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} id="myBox" rows = "8" onChange={Onnchange} style = {{backgroundColor: props.mode === "light" ? "white": "grey" , color:props.mode === "light" ? "black" : "white"}} ></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={UpHandle}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={LoHandle} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={ClearHandle} >Clear Text</button>       
    </form>

    <div className="container my-3" style = {{color: props.mode === "light" ? "black" : "white"}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>    
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something To Preview"}</p>
    </div>
  
    </>
  )
}
