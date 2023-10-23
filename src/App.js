import Layout from "./hocs/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import PrivateRoute from "./components/PrivateRoute";
import "./sass/main.scss";
import  './app.css'

import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/HomePage";
import AddedListing from "./pages/AddedListing";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/:id" component={ListingDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/addListing" component={AddedListing} />
            <Route component={NotFound} />
            
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
