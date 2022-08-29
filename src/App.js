import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "TextUtils" About = "About Us"/>
    {/* <Navbar title = {3} About = "About Us"/> */}
    {/* <Navbar title = "TextUtils"/> */}

    <TextForm heading = "Enter Text to Analyze"/>
    </>
  );
}

export default App;