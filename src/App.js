import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Components
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"

// Import Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Jati from "./Pages/Jati/jati"
import Gsap from "./Pages/GSAP"
import Gsap2 from "./Pages/GSAP/gsap2"

class App extends React.Component{
  render(){
    return(
     <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/jati" component={Jati}/>
        <Route path="/gsap" component={Gsap}/>
        <Route path="/gsap2" component={Gsap2}/>
      </Switch>
      {/* <Footer/> */}
     </BrowserRouter>
    )
  }
}

export default App
