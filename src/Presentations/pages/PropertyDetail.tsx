import React, { useEffect } from "react";
import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { initalAssets, initalDepartments, initalStaffs } from "../../Domain/list";
import { Asset } from "../../Domain/Asset/Asset";
import { Role, User } from "../../Domain/User/User";
import { Department } from "../../Domain/Department/Department";
import AssignAsset from "./AssignAsset";

function PropertyDetail() {
    const {assetId} = useParams();
    const [asset,setAsset] = useState<Asset>();
    const [staff,setStaff] = useState<User>();
    const [department,setDepartment] = useState<Department|undefined>();
    const navigate = useNavigate()
    useEffect(()=>{

        const filterasset = initalAssets.filter((asset)=> asset.id === assetId);
        setAsset((s)=>s= filterasset[0]);
        

    },[assetId])
    useEffect(()=>{
        const filterstaff = initalStaffs.filter((staff)=> staff.id === asset?.owner?.id);
        
        setStaff((s)=>s= filterstaff[0]);
        const filterdepartment:Department[] = initalDepartments.filter((dep)=>dep.id === staff?.department?.id);
        setDepartment((s)=>s= filterdepartment[0])
    },[asset,department])
    // console.log(asset?.ownerId)
    console.log(staff)
	const [selectedItem, setSelectedItem] = useState(2);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
	const [isModalOpenThree, setIsModalOpenThree] = useState(false);

	const fileInputRef = useRef(null);

	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);
    
	 const handleAssignModal = ()=>{
		setIsModalOpen(false)
	 }

	return (
		<div className='property-detail'>

		
	
				<div className='body'>
					<section className='one'>
						<div className='col'>
							<h4> {asset?.id} </h4>
                            
							<p> Name: {asset?.title} </p>
                            
							<p> Type: {asset?.type}</p>
                          
							<p> Status: {asset?.active ? "Avaliable":"In Use"} </p>
                           
                            <p> Created Time: {asset?.addDateTime.toLocaleDateString()} </p>
                         
						</div>
                        <div>
							{asset?.active &&
                        <button
							style={{ color: "black" }}
							onClick={() => setIsModalOpen(true)}
						>
							Assign
						</button>
}
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
						


						{isModalOpen && (
							<div>
								<Modal
									isOpen={isModalOpen}
									onRequestClose={() => setIsModalOpen(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<AssignAsset asset={asset!} handleModal={handleAssignModal}/>
								</Modal>
							</div>
						)}
					
						{isModalOpenTwo && (
							<div className='modal-overlay'>
								<Modal
									isOpen={isModalOpenTwo}
									onRequestClose={() => setIsModalOpenTwo(false)}
									className='modal-content custom-property delete'
									overlayClassName='modal-overlay'
								>
									<p style={{ fontSize: "20px", margin: "0" }}>
										Are you sure you want to delete
									</p>
									<h2> Property-001? </h2>
									<div className='buttons' style={{ marginRight: "-15em" }}>
										<button
											onClick={() => setIsModalOpenTwo(false)}
											style={{
												color: "white",
												backgroundColor: "black",
												marginRight: "16em",
											}}
										>
											yes
										</button>
										<Link to='/property'>
											<button
												style={{
													color: "black",
													backgroundColor: "white",
													marginRight: "16em",
												}}
											>
												No
											</button>
										</Link>
									</div>
								</Modal>
							</div>
						)}
						
						{isModalOpenThree && (
							<div className='modal-overlay'>
								<Modal
									isOpen={isModalOpenThree}
									onRequestClose={() => setIsModalOpenThree(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<h2> Edit Property </h2>
									<div className='inputs'>
										<h4>Property ID</h4>
										<input placeholder='Enter ID' />
										<h4>Property Name</h4>
										<input placeholder='Enter Property Name' />
										<div className='row'>
											<div className='col'>
												<div className='input-container'>
													<p> Attach File: </p>
													<div className='cont'>
														<input
															type='file'
															// onChange={handleFileChange}
															style={{ display: "none" }}
															ref={fileInputRef}
														/>
														<div
															style={{
																display: "flex",
																alignItems: "center",
															}}
														>
															<FaUpload style={{ marginRight: "5px" }} />
															<input
																type='text'
																placeholder='Choose File'
																// onClick={() => fileInputRef.current.click()}
																readOnly
															/>
														</div>
													</div>
												</div>
											</div>
											<div
												className='input-container'
												style={{
													width: "12em",
													marginLeft: "30px",
													backgroundColor: "white",
													padding: "0px 10px",
													borderRadius: "8px",
													boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.322)",
												}}
											>
												<input
													type='text'
													placeholder='Select category'
													value={selectedOption}
													readOnly
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												/>
												<div
													className='dropdown-arrow'
													onClick={() => setDropdownOpen(!isDropdownOpen)}
												>
													<IoIosArrowDown />
												</div>
												{isDropdownOpen && (
													<ul
														className='options-list'
														style={{ top: "33.1em" }}
													>
														{options.map((option) => (
															<li
																key={option}
																// onClick={() => handleOptionClick(option)}
															>
																{option}
															</li>
														))}
													</ul>
												)}
											</div>
										</div>
										<div className='buttons'>
											<button
												onClick={() => setIsModalOpenThree(false)}
												style={{
													color: "white",
													backgroundColor: "black",
													marginRight: "16em",
												}}
											>
												Cancel
											</button>
											<Link to='/property'>
												<button
													style={{
														color: "black",
														backgroundColor: "white",
														marginRight: "16em",
													}}
												>
													Save
												</button>
											</Link>
										</div>
									</div>
								</Modal>
							</div>
						)}
					</section>
                    {!asset?.active &&
					<section className='two'>
						<div className='col'>
							<h4> {staff?.firstName} {staff?.lastName}  </h4>
                            
							<p> Employee ID: {staff?.id} </p>
                            
							<p> Departement: {staff?.department?.name} </p>
                            
							<p> Role: {Role[staff?.role!]} </p>
							<p> Assign Date: {asset?.assignDateTime?.toLocaleDateString()} </p>
							<p>Assign Reason: {asset?.reason}</p>
                            
                            <button 
                             onClick={()=>{navigate(`/staffs/${staff?.id}`)}}
                            >Detail</button>
						</div>
						
					</section>
}					
				</div>
			</div>
	
	);
}

export default PropertyDetail;
