// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import './Navbar.css'

// function NavBar({ title, list }) {
//     return (
//         <nav className='navbar navbar-expand-lg navbar-light bg-light  d-flex  justify-content-between p-3'>
//             <div>
//                <Link><h2 className='header_title'>{title}</h2></Link>  
            
//             </div>
//             <div>
//                 <ul className='d-flex align-items-center'>
//                     {list.map((item, index) => {
//                         return <li className="list_item" key={index}> <Link to={item}>{item}</Link> </li>
//                     })}
//                 </ul>
//             </div>
//             <div>
//                 <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// export default NavBar