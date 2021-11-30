
import './App.css';
import {Footer} from "./components/Footer/Footer"
import {Header} from "./components/Header/Header"
import { Home } from './components/Home/Home';
import {Catalog} from "./components/Catalog/Catalog"
import { Filter } from "./components/Filter/Filter";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route exact path="/">
                      <Header isHomePage={true}/>
                      <Home/>
                  </Route>
                  <Route path="/catalog plane">
                      <Header isHomePage={false}/>
                      <Filter/>
                      <Catalog/>
                  </Route>
                  <Route path="/travel">
                      <Header isHomePage={true}/>
                  </Route>
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
