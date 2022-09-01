import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState("light");
  
  const ToggleMode = ()=> {
    if(mode === "light")
    {
        setMode("dark");
        document.body.style.backgroundColor = "#031a2e";
        
    }
    else
    {
        setMode("light");
        document.body.style.backgroundColor = "white";
    } 
  }

  return (
    <>
    <Navbar mode = {mode} toggleMode = {ToggleMode} title = "TextUtils" About = "About Us"/>
    {/* <Navbar title = {3} About = "About Us"/> */}
    {/* <Navbar title = "TextUtils"/> */}

    <TextForm heading = "Enter Text to Analyze" mode = {mode}/>

    </>
  );
}

export default App;