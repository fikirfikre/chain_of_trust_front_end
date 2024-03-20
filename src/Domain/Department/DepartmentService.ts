import { User } from "../User/User";
import { initalDepartments } from "../list";
import { Department } from "./Department";

export interface DepartmentService{
    fetchDepartments():Promise<Department[]>;
    createDeparment(department:Department):Promise<Department>;
    updateDepartment(departmentId:string):Promise<Department>;
    deleteDepartment(department:string):Promise<void>;
    //get department with id
    //get department with staffId
    //add staff to department
}
// export const  getDepartmentByStaffId = (staffId:string)=>{
//     const matchingDep = initalDepartments.find(department => department.staff?.some((user:User) => user.id===staffId))
//     return matchingDep
//     }