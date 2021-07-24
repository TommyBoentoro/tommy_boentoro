import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Components
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"

// Import Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Jati from "./Pages/Jati/jati"

class App extends React.Component{
  render(){
    return(
     <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/jati" component={Jati}/>
      </Switch>
      <Footer/>
     </BrowserRouter>
    )
  }
}

export default App
