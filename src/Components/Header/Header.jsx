import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from '../NavBar/Navbar';
import { Outlet, Link } from "react-router-dom";
import './Header.css'
function Header({title , list}){ 
   return (
    <ul className='d-flex align-items-center'>
    {list.map((item, index) => {
        return <li className="list_item" key={index}> <Link to={item}>{item}</Link> </li>
    })}
</ul>
      )
}

export default Header