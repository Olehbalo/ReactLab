import './App.css';
import {Footer} from "./components/Footer/Footer"
import {Header} from "./components/Header/Header"
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog'; 
import {BrowserRouter,  Route,} from "react-router-dom";
import { Filter } from "./components/Filter/Filter"

function App() {
  return (
    <BrowserRouter>
    <div>
        
            <Route exact path="/">
                <Header isHomePage={true}/>
                <Home/>
            </Route>
            <Route path="/catalog">
                <Header isHomePage={false}/>
                <Filter/>
                <Catalog/>
            </Route>
            <Route path="/cart">
                <Header isHomePage={true}/>
            </Route>
        
        <Footer/>
    </div>
</BrowserRouter>
);
}

export default App;
