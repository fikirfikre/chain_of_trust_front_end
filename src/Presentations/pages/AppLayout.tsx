import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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

function AppLayout() {
    return (
        <BrowserRouter>
            <div className='app' >
                <SideBar />
                <Outlet/>
                <main className='main-content'>
                   <Routes>
                    <Route path="/admin" element={<DashBoard/>}/>
                    <Route path="assets" element={<Property/>}/>
                    <Route path="categories" element={<Category/>}/>
                    <Route path="departments" element={<DepartmentPage/>}/>
                    <Route path="staffs" element={<Staffs/>}/>
                    <Route path="staffs/:staffId" element={<StaffDetail />} />
                    <Route path="assets/:assetId" element={<PropertyDetail />} />
                    <Route path="requests" element={<Requests/>}/>
                    <Route path="requests/:requestId" element={<RequestDetail/>}/>
                   </Routes>
                 
                </main>
              
            </div>

            </BrowserRouter>
    )
}
export default AppLayout