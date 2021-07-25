import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="main-content">
        <Switch>
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/" component={Home} />
          <Route exact to="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
