import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
function App() {
  return (
    <div>
      hi
      <Route path="/Welcome">
        welcome
        <Welcome />
      </Route>
      prod <Route path="/Products">Products</Route>
    </div>
  );
}

export default App;
