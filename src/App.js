import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Components
import Navbar from "./Components/navbar"

// Import Pages
import Home from "./Pages/Home"
import Jati from "./Pages/Jati/jati"
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
        <Route path="/jati" component={Jati}/>
        <Route path="/joshua" component={Joshua}/>
        <Route path="/todolist" component={Todo}/>

          {/* Test */}
        <Route path="/about" component={About2}/>
      </Switch>
     </BrowserRouter>
    )
  }
}

export default App
