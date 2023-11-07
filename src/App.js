import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Prodcucts } from "./components/Prodcucts";
import { Featured } from "./components/Featured";
import { New } from "./components/New";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="about" element={<About/>}/>

          <Route path="order-summary" element={<OrderSummary/>}/>

          <Route path="products" element={<Prodcucts/>}>

            <Route path="featured" element={<Featured/>}/>
            <Route path="new" element={<New/>}/>
          
          </Route>

          <Route path="*" element={<NoMatch/>}/>

        </Routes>
      </>
  );
}

export default App;
