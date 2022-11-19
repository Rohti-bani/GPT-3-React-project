import {Navbar, Cta} from "./Components";
import {Footer, Blog , Possibility, Features, WhatGPT3, Header} from "./Container";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
    
  )
}

export default App
