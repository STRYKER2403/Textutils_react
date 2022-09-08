import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

    import {
      BrowserRouter as Router,
      Routes,
      Route
    } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
      setAlert({
        msg : message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const ToggleMode = ()=> {
    if(mode === "light")
    {
        setMode("dark");
        document.body.style.backgroundColor = "#031a2e";  
        showAlert("Dark Mode Has Been Enabled","success");

    }
    else
    {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Has Been Enabled","success");

    } 
  }

  return (
    <>
    <Router>
    <Navbar  mode = {mode} toggleMode = {ToggleMode} title = "TextUtils" About = "About Us"/>
    <Alert alert = {alert}/>

    <Routes>
          <Route exact path="/about" element = {<About mode = {mode} />} />
          <Route exact path="/" element = {<TextForm heading = "Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>} />         
    </Routes>
    </Router>
    
    </>
  );
}

export default App;