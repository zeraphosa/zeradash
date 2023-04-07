// import { useState } from "react";
import Sidebar from "./layout/Sidebar";
// import Home from "./pages/Home";

export default function App() {
  // const [toggle, setToggle] = useState(true);
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  return (
    // <div className="container-fluid bg-secondary min-vh-100">
    //   <div className="row">
    //     {toggle && (
    //       <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
    //         <Sidebar />
    //       </div>
    //     )}
    //     {toggle && <div className="col-4 col-md-2"></div>}
    //     <div className="col">
    //       <Home handleToggle={handleToggle} />
    //     </div>
    //   </div>
    // </div>
    <div>
      <Sidebar/>
    </div>
  );
}
