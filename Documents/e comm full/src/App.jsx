import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"; // Assuming Home is your products page component
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
