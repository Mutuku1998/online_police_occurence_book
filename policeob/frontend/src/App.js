
import "./App.css"
import Home from "./conponents/pages/Home";
import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Register from "./conponents/pages/Register";
import Login from "./conponents/pages/Login";
import ReportingForm from "./conponents/pages/ReportingForm";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reporting" element={<ReportingForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
