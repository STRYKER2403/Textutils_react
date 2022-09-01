import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

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
    <Navbar  mode = {mode} toggleMode = {ToggleMode} title = "TextUtils" About = "About Us"/>
    {/* <Navbar title = {3} About = "About Us"/> */}
    {/* <Navbar title = "TextUtils"/> */}
    <Alert alert = {alert}/>
    <TextForm heading = "Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>
    </>
  );
}

export default App;