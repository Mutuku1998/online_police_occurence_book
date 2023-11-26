
import "./App.css"
import Home from "./conponents/pages/Home";
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Register from "./conponents/pages/Register";
import Login from "./conponents/pages/Login";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
