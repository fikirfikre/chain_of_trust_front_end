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

function requiredSidebar(path:RouteProps['path']){
    const excludedRoutes = ['/', '/about', '/service','/signin','/signup']; // Add your excluded routes here (if any)
    return !excludedRoutes.includes(path!);
}
function requiredNavbar(path:RouteProps['path']){
    const excludedRoutes = ['/admin', '/assets', '/categories','/departments','/staffs',"/staffs/:staffId","/assets/:assetId","/requests","/requests/:requestId"  ]; // Add your excluded routes here (if any)
    return !excludedRoutes.includes(path!);
}
function AppLayout() {

    return (
        
        <BrowserRouter>
        {requiredNavbar(window.location.pathname) && <Navbar />}
            <div className={`${requiredSidebar(window.location.pathname)? 'app' : " "} ` } >
            {requiredSidebar(window.location.pathname) && <SideBar/>}
            
                <main className={`${requiredSidebar(window.location.pathname) ? 'main-content' : " "} ` } >
                   <Routes>
                    <Route path="/admin" element={<DashBoard/>}/>
                    <Route path="/assets" element={<Property/>}/>
                    <Route path="/categories" element={<Category/>}/>
                    <Route path="/departments" element={<DepartmentPage/>}/>
                    <Route path="/staffs" element={<Staffs/>}/>
                    <Route path="/staffs/:staffId" element={<StaffDetail />} />
                    <Route path="/assets/:assetId" element={<PropertyDetail />} />
                    <Route path="/requests" element={<Requests/>}/>
                    <Route path="/requests/:requestId" element={<RequestDetail/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Services/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                   </Routes>
                 
                </main>
              
            </div>

            </BrowserRouter>
    )
}
export default AppLayout