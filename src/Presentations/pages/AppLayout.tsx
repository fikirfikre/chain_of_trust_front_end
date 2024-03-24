import { BrowserRouter, Outlet, Route, RouteProps, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "./Dashboard";
import Property from "./Property";
import Category from "./Category";
import DepartmentPage from "./Department";
import Staffs from "./Staff";
import Requests from "./Request";
import StaffDetail from "./StaffDetail";
import PropertyDetail from "./PropertyDetail";
import RequestDetail from "./RequestDetail";
import Home from "../general/Home";
import About from "../general/About";
import Services from "../general/Services";
import Signup from "../general/Signup";
import Signin from "../general/Signin";
import Navbar from "../general/Navbar";
import { PiGitPullRequest, PiHouse, PiSquaresFourBold, PiTree } from "react-icons/pi";
import { FaTv } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import Main from "./Main";
import MainSecond from "./MainSecond";

function requiredSidebar(path:RouteProps['path']){
    const excludedRoutes = ['/', '/about', '/service','/signin','/signup']; // Add your excluded routes here (if any)
    return !excludedRoutes.includes(path!);
}
function requiredNavbar(path:RouteProps['path']){
    const excludedRoutes = ['admin', '/assets', '/categories','/departments','/staffs',"/staffs/:staffId","/assets/:assetId","/requests","/requests/:requestId"  ]; 
      const staffListRegex = /^\/staffs\/[^/]+$/;
      const assetListRegex = /^\/assets\/[^/]+$/;
      const requestsListRegex = /^\/requests\/[^/]+$/;
     excludedRoutes.push(staffListRegex.toString());
     excludedRoutes.push(assetListRegex.toString());
     excludedRoutes.push(requestsListRegex.toString());
    return !excludedRoutes.includes(path!);
}
function AppLayout() {

    return (
        
        <BrowserRouter>
       
                   <Routes>
                    <Route path="/admin" element={<Main child={<DashBoard/>}/>}/>
                    <Route path="/assets" element={<Main child={<Property/>}/>}/>
                    <Route path="/categories" element={<Main child={<Category/>}/>}/>
                    <Route path="/departments" element={<Main child={<DepartmentPage/>}/>}/>
                    <Route path="/staffs" element={<Main child={<Staffs/>}/>}/>
                    <Route path="/staffs/:staffId" element={<Main child={<StaffDetail/>}/>} />
                    <Route path="/assets/:assetId" element={<Main child={<PropertyDetail/>}/>} />
                    <Route path="/requests" element={<Main child={<Requests/>}/>}/>
                    <Route path="/requests/:requestId" element={<Main child={<RequestDetail/>}/>}/>
                    <Route path="/" element={<MainSecond child={<Home/>}/>}/>
                    <Route path="/about" element={<MainSecond child={<About/>}/>}/>
                    <Route path="/service" element={<MainSecond child={<Services/>}/>}/>
                    <Route path="/signin" element={<MainSecond child={<Signin/>}/>}/>
                    <Route path="/signup" element={<MainSecond child={<Signup/>}/>}/>
                   </Routes>
                 
                
              
          
    
            </BrowserRouter>
    )
}
export default AppLayout