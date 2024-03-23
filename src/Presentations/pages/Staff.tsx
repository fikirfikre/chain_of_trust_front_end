import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from './Staff.module.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import RegisterStaff from "./RegisterStaff";
import Modal from "react-modal";
import { initalStaffs } from "../../Domain/list";
import { Role } from "../../Domain/User/User";
export default function Staffs(){
      const [staffs,setStaff] = useState(initalStaffs)
      const [isModalOpen,setIsModalOpen] = useState(false)
      const handleModal = ()=>{
        setIsModalOpen(m=>m=!isModalOpen)
      }
      const navigate = useNavigate();
      const handleUserClick = (staffId:string)=>{
        navigate(`/staffs/${staffId}`);
      }
    return<>

   
            <Navbar/>
           
            <Modal
    isOpen={isModalOpen}
    
    //  onRequestClose={() => setIsModalOpen(false)}
    className='modal-content custom-property'
    overlayClassName='modal-overlay'
>
  
<RegisterStaff handlModal={handleModal}/>
</Modal>
            <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button onClick={()=>handleModal()}>+</button>
            </div>
            <table className={styles.table}>
            <thead>
              <tr key={"employee top"}>
                <th>Employee Id</th>
                <th>Employee Email</th>
                <th>Department</th>
                <th>Roles</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {staffs.map((staff)=>(
    <tr key={staff.id}>
    <td>{staff.id}</td>
    <td>{staff.email}</td>
    <td>{staff.department?.name}</td>
    <td>{Role[staff.role]}</td>
    <td onClick={()=>handleUserClick(staff.id)}>Detail</td>
</tr>
                ))}
            
            </tbody>
        </table>
    </div>
    </>
}