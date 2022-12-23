
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Books from "./Components/Books/Books"
import Materials from "./Components/Materials/Materials";
import Games from "./Components/Games/Games";
import Gifts from "./Components/Gifts/Gifts";



const listArry = ["Books", "Games", "Gifts", "Materials"]

function App() {


  <BrowserRouter>
    <div className='container'>
      <Header title="Inventory" list={listArry} />
      <Home list={listArry} />
      <Routes>
        <Route path="/Books" element={<Books />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Materials" element={<Materials />} />
        <Route path="/Gifts" element={<Gifts />} />
      </Routes>
    </div>
  </BrowserRouter>
}



export default App;

