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
import Joshua from "./Pages/Joshua + partners/joshua"
import About2 from "./Pages/About2"
import Todo from "./Pages/to-do-list/todo"

class App extends React.Component{
  render(){
    return(
     <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/jati" component={Jati}/>
        <Route path="/joshua" component={Joshua}/>
        <Route path="/todolist" component={Todo}/>

          {/* Test */}
        <Route path="/gsap" component={Gsap}/>
        <Route path="/gsap2" component={Gsap2}/>
        <Route path="/about2" component={About2}/>
      </Switch>
    
     </BrowserRouter>
    )
  }
}

export default App
