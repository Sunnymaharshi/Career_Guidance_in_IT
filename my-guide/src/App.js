import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/PageNotFound";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="main-content">
        <Switch>
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route exact to="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
