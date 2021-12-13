import Student from "./components/Student/Student";
import Demoprops from "./Demos/Demoprops";
import Card from "./components/NestedComp/Card";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import DemoState from "./Demos/DemoState";
import Parent from "./Demos/Parent";
import Sampl from "./Demos/Sampl";
import { Route } from "react-router-dom";
import Welcome from "./Demos/Pages/Welcome";
import MainHeader from "./Demos/Pages/MainHeader";
import Product from "./Demos/Pages/Product";
import ProductDetail from "./Demos/Pages/ProductDetail";
import SayHello from "./Demos/TestDemo/SayHello";
function App() {
  return (
    <div>
      {/* <h1>Welcome </h1>
      <p>This is visbile</p> */}
      {/* <MainHeader />
      <main>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/ProductDetail/:productID">
          <ProductDetail />
        </Route>
        <CreateStudent></CreateStudent>
        <Student marks="97" name="Shiva" subject="C#"></Student>
        <Student marks="54" name="Dhruvan" subject="Java" />
       */}{" "}
      {/* <CreateStudent></CreateStudent> */}y
      {/*   <Parent></Parent>
      <Demoprops name="preethi"></Demoprops> */}
      {/* <DemoState></DemoState> */}
      {/* <Sampl></Sampl> 
      </main>*/}
      <SayHello param="Naramdha"></SayHello>
    </div>
  );
}

export default App;
