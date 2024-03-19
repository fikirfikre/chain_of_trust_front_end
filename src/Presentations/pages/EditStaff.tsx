import { useState } from "react";
import RolesDropDown from "../components/RolesDropDown";
import DepartmentDropDown from "../components/DepartmentDropDown";
import { Link } from "react-router-dom";
import { Role, User } from "../../Domain/User/User";
import { Department } from "../../Domain/Department/Department";
interface Props {
    handlModal: () => void
    staff: User
}
function EditStaff(props: Props) {
    const [isRoleOpen, setRoleOpen] = useState(false);
    const [isDepOpen, setDepOpen] = useState(false);
    const [selectedRoles,setRolesOption] = useState(props.staff.role)
    const [selectedDepartment,setDepartmentOption] = useState(props.staff.departmentId)
    const [editedStaff,setStaff] = useState<User>(props.staff);
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        console.log()
        setStaff({...props.staff,[name]:value});
      };
      const handleSelectChange = (value:Role)=>{
        setStaff({...props.staff,"role":value})
      }
      const handleSelectDepChange =(value:string)=>{
        setStaff({...props.staff,"departmentId":value})
      }
      console.log("dd")
      console.log(editedStaff)

    const toggleRoleDropdown = () => {
        setDepOpen(false);
        setRoleOpen(!isRoleOpen)
    };

   
    const toggleDepDropdown = () => {
        setDepOpen(!isDepOpen);
        setRoleOpen(false)
    };


    return <div onClick={() => {
        setDepOpen(false);
        setRoleOpen(false);
    }}>
        <h2> Edit User </h2>
        <div className='inputs'>
            <h3>Employee ID</h3>
            <input placeholder='Enter ID' name="id" value={editedStaff.id} onChange={handleInputChange}/>
            <h4>Employee Email</h4>
            <input placeholder='Enter email' name="email" value={editedStaff.email} onChange={handleInputChange} />
            <div className='row'>
                <RolesDropDown toggleDropdown={toggleRoleDropdown} isOpen={isRoleOpen} staff={editedStaff} handleInputChange={handleSelectChange} />
                <DepartmentDropDown toggleDropdown={toggleDepDropdown} isOpen={isDepOpen} staff={editedStaff} handleInputChange={handleSelectDepChange}/>
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
                <Link to='/staff'>
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
export default EditStaff