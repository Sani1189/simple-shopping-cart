import { Route, Routes } from "react-router-dom";
import Home from "./page/Home"
import Cart from "./page/Cart"
function App() {
  return (
    <div className="App" >
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
