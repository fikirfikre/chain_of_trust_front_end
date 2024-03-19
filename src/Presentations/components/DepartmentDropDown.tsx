import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { initalDepartments } from "../../Domain/list";
import { useEffect, useState } from "react";
import { User } from "../../Domain/User/User";
import { Department } from "../../Domain/Department/Department";
interface Props{
    isOpen:boolean,
    toggleDropdown:()=>void,
    staff?:User
    handleInputChange:(value:string)=>void,
  
}
export default function DepartmentDropDown(props:Props){
    const options = initalDepartments;

   const  dep = initalDepartments.filter((dep)=>
        dep.id == props.staff?.departmentId)
    const  [selectedOption,setOption] = useState<Department|undefined>(dep[0])
    const [isDepOpen,setDepOpen] = useState(false);
    const toggleDepDropdown = () => setDepOpen(!isDepOpen);
    useEffect(()=>{
        props.handleInputChange(selectedOption == undefined ? "":selectedOption.id)
    },[selectedOption])

    return(
    <div className="adjust-option" onClick={(e) => e.stopPropagation()} >
     <div className='input-container option-select'>
    <input
    style={{
        cursor:"pointer"
    }}
    name="departmentId"
        type='text'
        placeholder='Select Department'
      value={selectedOption !== undefined? selectedOption.name : ""}
      onClick={() => props.toggleDropdown()}
    />
    {props.isOpen ? <IoIosArrowUp /> :<IoIosArrowDown />} 
    </div>
     
     {props.isOpen && (
        <ul className='options-list'>
            {options.map((option) => (
                <li
                    key={option.id}
                     onClick={() => {
                        setOption((o)=>o=option)
                        console.log(selectedOption)
                       
                        }}
                >
                    {option.name}
                </li>
            ))}
        </ul>
    )}   
    
</div>)
}