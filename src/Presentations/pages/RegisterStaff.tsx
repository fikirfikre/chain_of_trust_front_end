import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { Role, User } from "../../Domain/User/User";
import { initalDepartments } from "../../Domain/list";
import { useState } from "react";
import DepartmentDropDown from "../components/DepartmentDropDown";
import RolesDropDown from "../components/RolesDropDown";
interface RegisterProps{
    handlModal : ()=>void
}
function RegisterStaff(props:RegisterProps){
    const initialUser =         {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        role: Role.User,
        organizationId: "",
        departmentId: "",
      }
    const [isRoleOpen,setRoleOpen] = useState(false);
    const toggleRoleDropdown = () =>{
        setDepOpen(false);
         setRoleOpen(!isRoleOpen)};

    const [isDepOpen,setDepOpen] = useState(false);
    const [newStaff,setStaff] = useState<User>(initialUser);
    const handleSelectedRole = (value:Role)=>{
        setStaff({...newStaff,"role":value})
    }
    const handleSelectedDepartment = (value:string)=>{
        setStaff({...newStaff,"departmentId":value})
    }
    const toggleDepDropdown = () => {
        setDepOpen(!isDepOpen);
        setRoleOpen(false)};
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setStaff({...newStaff,[name]:value});
    }

    console.log(newStaff)

    return 	<div onClick={()=>{
        setDepOpen(false);
        setRoleOpen(false);
    }}>
    <h2> Register User </h2>
    <div className='inputs'>
        <h3>Employee ID</h3>
        <input placeholder='Enter ID' name="id" onChange={handleInputChange} />
        <h4>Employee Email</h4>
        <input placeholder='Enter email' name="email" onChange={handleInputChange}/>
        <div className='row'>
        <RolesDropDown toggleDropdown={toggleRoleDropdown} isOpen={isRoleOpen}  handleInputChange={handleSelectedRole} />
         <DepartmentDropDown toggleDropdown={toggleDepDropdown} isOpen={isDepOpen} handleInputChange={handleSelectedDepartment}/>
        </div>
        <div className='buttons'>
            <button
             onClick={() => props.handlModal()}
                style={{
                    color: "white",
                    backgroundColor: "black",
    
                }}
            >
                Cancel
            </button>
            <Link to='/property'>
                <button
                    style={{
                        color: "black",
                        backgroundColor: "white",
                       
                    }}
                >
                    Save
                </button>
            </Link>
        </div>
    </div>
    </div>

}

interface Props{
    isOpen:boolean,
    toggleDropdown:()=>void
  
}

export default RegisterStaff