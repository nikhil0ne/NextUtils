import React, { useState } from 'react';
// import Switch from 'react-router';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const [label, setLabel] = useState("light mode")
  const [color, setColor] = useState("dark")
  const [bg, setBg] = useState("Light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  let toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      setLabel("dark mode")
      setColor("white")
      setBg("gray")
      document.body.style.backgroundColor = "#212529";
      showAlert(" Dark mode has been enables", "success ")
      document.title = "NextUtils - Dark mode"

    } else {
      setMode("light");
      setLabel("light mode")
      setColor("dark")
      setBg("Light")
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enables", "warning")
      document.title = "NextUtils - Light mode"
    }
  }
  return (
    <div className="App ">
      <Router>
        {/* <Navbar title="NikhilOne" aboutText="About Us"/> */}
        <Navbar mode={mode} toggleMode={toggleMode} label={label} color={color} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm heading="Enter the text below to Analyze" bg={bg} color={color} showAlert={showAlert} />}>
            </Route>
        </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
