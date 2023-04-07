import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// {/* <div className="bg-dark sidebar">
//       <div className="row">
//         <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
//           <div>
//             <a href="/" className="text-white text-decoration-none d-flex align-items-center ms-3 mt-3">
//               <span className="ms-1 fs-4 d-sm-none">Z</span>
//               <span className="ms-1 fs-4 d-none d-sm-inline">ZERA</span>
//             </a>
//             <hr className="text-secondary d-none d-sm-block" />
//             <ul className="nav nav-pills flex-column mt-3 mt-sm-0" id="menu">
//               <li className="nav-item my-1 py-2 py-sm-0">
//                 <a href="/" className="nav-link text-white fs-5" aria-current="page">
//                   <i className="bi bi-house"></i>
//                   <span className="ms-3 d-none d-sm-inline">Dashboard</span>
//                 </a>
//               </li>
//               <li className="nav-item my-1 py-2 py-sm-0">
//                 <a href="#sidemenu" className="nav-link text-white fs-5" data-bs-toggle="collapse" aria-current="page">
//                   <i className="bi bi-cart"></i>
//                   <span className="ms-3 d-none d-sm-inline">Ecommerce</span>
//                 </a>
//               </li>
//               <li className="nav-item my-1 py-2 py-sm-0">
//                 <a href="/" className="nav-link text-white fs-5" aria-current="page">
//                   <i className="bi bi-shield-lock"></i>
//                   <span className="ms-3 d-none d-sm-inline">Private</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="dropdown open">
//             <a href="/" class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               <i className="bi bi-person-circle"></i> <span className="ms-2 d-none d-sm-inline">Zaur Sharifov</span>
//             </a>
//             <div class="dropdown-menu" aria-labelledby="triggerId">
//               <a class="dropdown-item" href="/">
//                 Profile
//               </a>
//               <a class="dropdown-item" href="/">
//                 Logout
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}