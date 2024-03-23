import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings, MdAdd } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import ReactModal from "react-modal";
import Modal from "react-modal";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Role, User } from "../../Domain/User/User";
import { initalAssetRequest, initalAssets, initalDepartments, initalMaintenanceRequest, initalRequest, initalStaffs } from "../../Domain/list";
import { Asset } from "../../Domain/Asset/Asset";
import { AssetMaintenanceRequest } from "../../Domain/Maintenance/AssetMaintenanceRequest";
import { AssetRequest } from "../../Domain/AssetRequest/AssetRequest";
import EditStaff from "./EditStaff";
import DeleteStaff from "./DeletStaff";
// import Department, { initalDepartments } from "./Department"
function StaffDetail() {
    const {staffId} = useParams();
   
    const initialUser =         {
        id: "user_9",
        email: "user9@example.com",
        firstName: "William",
        lastName: "Brown",
        role: Role.Admin,
        organizationId: "org_3",
        departmentId: "department_1",
      }
    const [staff,setStaff]=useState<User>(initialUser);
    const [assets,setAsset]=useState<Asset[]>([]);
    const [maintenanceRequests,setMaintenanceRequest] = useState<AssetMaintenanceRequest[]>([])
    const [assetRequests,setAssetRequest] = useState<AssetRequest[]>([])

    const [index,setIndex]=useState(0);
    const [isEditModal,setIsEditModalOpen] = useState(false);
    const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
    const [isModalOpenThree, setIsModalOpenThree] = useState(false);
    const handleEditClicked = ()=>{
      
      setIsModalOpenThree(m=>m=!isModalOpenThree)
    }
    const handleDeleteClicked = ()=>{
      
      setIsModalOpenTwo(m=>m=!isModalOpenTwo)
    }

    const handleClicked = (value:number)=>{
        setIndex((i)=>i=value)
    }
    useEffect(()=>{
        //get user using staff id - user(slectedUser)
        const filterUser = initalStaffs.filter((user) => user.id == staffId);
        setStaff(filterUser[0])
        //get 
        //get asset using staff Id - 
        const assets = initalAssets.filter((asset)=>asset.owner?.id == staffId);
        setAsset(assets)
        //get request using staff Id 
        const requests = initalAssetRequest.filter((request)=>request.user.id == staffId);
         setAssetRequest(requests)
         //get request using staff Id
        const maintreq = initalMaintenanceRequest.filter((request)=>request.user.id == staffId);
        setMaintenanceRequest(maintreq)
    
    },[staffId])
  
	return (
		<div className='staff-detail'>
				<div className='body'>
					<section className='one'>
						<div className='col'>
							<h4> {staff.id} </h4>
							<p> {staff.firstName} </p>
							<p> {staff.lastName} </p>
                            <p> {staff.email} </p>
							<p>{Role[staff.role]} </p>
						</div>
                        <div> 
						<button
							onClick={() => setIsModalOpenThree(true)}
							style={{ backgroundColor: "#011b33", color: "white" }}
						>
							Edit
						</button>
                        	<button
							style={{ color: "black" }}
							onClick={() => setIsModalOpenTwo(true)}
						>
							Delete
						</button>
                        </div>
						
								<Modal
									isOpen={isModalOpenThree}
                                    // appElement={document.getElementById('root')}
									onRequestClose={() => setIsModalOpenThree(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<EditStaff handlModal={handleEditClicked} staff={staff}/>
								</Modal>
							
	
								<Modal
									isOpen={isModalOpenTwo}
									onRequestClose={() => setIsModalOpenTwo(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
                                    >
                  <DeleteStaff staff={staff} handleModal={handleDeleteClicked}/>
						    
								</Modal>

					</section>

					<section className='two'>
						<h3> Owned Asset </h3>
                        <div className="list-box">
                        <table>
                            <thead>
                                <tr key={"employee asset"}>
                                <th>Asset ID</th>
                                <th>Asset Type</th>
                                <th>Status</th>
                                <th>Created Date</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {assets.map((asset)=>(
                                <tr key={asset.id}>
                                    <td>{asset.id}</td>
                                    <td>{asset.type}</td>
                                    <td>{asset.active ? "In Use":"Avaliable"}</td>
                                    <td>{asset.addDateTime.toLocaleDateString()}</td>
                                    <td>Detail</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
	
					</section>
					<section className='three'>
						<h3> <span className={`${index == 0 ? "selected-request" : "unselected-request"}`} onClick={()=>handleClicked(0)}>AssetRequest</span> <span className={`${index == 1 ? "selected-request" : "unselected-request"}`} onClick={()=>handleClicked(1)}>Maintenace Request</span> </h3>
                        <div className="list-box">
                            {index == 0 ?
                        <table>

                            <thead>
                                <tr key={"employee-request"}>
                                <th>Request ID</th>
                                <th>Asset ID</th>
                              
                                <th>created Date</th>
                                <th>Resolved Date</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {assetRequests.map((request)=>(
                                    <tr>
                                      <td>{request.id}</td>
                                      <td>{request.asset.id}</td>
                                      <td>{request.createDatetime.toLocaleDateString()}</td>
                                      <td>{request.resolveDatetime == undefined ? "-" : request.resolveDatetime.toLocaleDateString()}</td>
                                      <td>Detail</td>
                                    </tr>
                               
                                ))}
                            </tbody>
                        </table>
                        :  <table>

                        <thead>
                            <tr>
                            <th>Request ID</th>
                            <th>Asset ID</th>
                            <th>created Date</th>
                            <th>approved</th>
                            <th>Resolved Date</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceRequests.map((request)=>(
                                <tr key={request.id}>
                                  <td>{request.id}</td>
                                  <td>{request.asset.title}</td>
                                  <td>{request.createDatetime.toLocaleDateString()}</td>
                                  <td>{request.approved == false && request.rejected == false ? "pending" : ""}</td>
                                  <td>{request.resolveDatetime == undefined ? "-" : request.resolveDatetime.toLocaleDateString()}</td>
                                  <td>Detail</td>
                                </tr>
                           
                            ))}
                        </tbody>
                    </table>}
                        </div>
					</section>
				</div>
			</div>
		
	);
}

export default StaffDetail;
