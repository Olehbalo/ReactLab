
import './App.css';
import {Footer} from "./components/Footer/Footer"
import {Header} from "./components/Header/Header"
import { Home } from './components/Home/Home';
import {Catalog} from "./components/Catalog/Catalog"
import {BrowserRouter, Switch, Route,} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route exact path="/">
                      <Header />
                      <Home/>
                  </Route>
                  <Route path="/catalog plane">
                      <Catalog/>
                  </Route>
                  <Route path="/comunication">
                      <Header />
                  </Route>
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
