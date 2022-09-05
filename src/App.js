import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

    // import {
    //   BrowserRouter as Router,
    //   Routes,
    //   Route
    // } from "react-router-dom";


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
        document.title = "TextUtils - Dark mode";

        // setInterval(()=>{
        //   document.title = "TextUtils is Amazing";
        // },2000);

        // setInterval(()=>{
        //   document.title = "TextUtils is Amazingly Good";
        // },1500);
    }
    else
    {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Has Been Enabled","success");
        document.title = "TextUtils - Light mode";
    } 
  }

  return (
    <>
    {/* <Router>
    <Navbar  mode = {mode} toggleMode = {ToggleMode} title = "TextUtils" About = "About Us"/>
    <Alert alert = {alert}/>

    <Routes>
          <Route exact path="/about" element = {<About />} />
          <Route exact path="/" element = {<TextForm heading = "Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>} />         
    </Routes>
    </Router> */}
    

    <Navbar  mode = {mode} toggleMode = {ToggleMode} title = "TextUtils" About = "About Us"/>
    {/* <Navbar title = {3} About = "About Us"/> */}
    {/* <Navbar title = "TextUtils"/> */}
    <Alert alert = {alert}/>
    <TextForm heading = "Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>
    {/* <About></About> */}
    </>
  );
}

export default App;