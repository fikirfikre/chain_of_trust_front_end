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
import EditAsset from "./EditAsset";
import UnallocateAsset from "./UnallcateAsset";

function PropertyDetail() {
	const { assetId } = useParams();
	const [asset, setAsset] = useState<Asset>();
	const [staff, setStaff] = useState<User>();
	const [department, setDepartment] = useState<Department | undefined>();
	const navigate = useNavigate()
	useEffect(() => {

		const filterasset = initalAssets.filter((asset) => asset.id === assetId);
		setAsset((s) => s = filterasset[0]);


	}, [assetId])
	useEffect(() => {
		const filterstaff = initalStaffs.filter((staff) => staff.id === asset?.owner?.id);

		setStaff((s) => s = filterstaff[0]);
		const filterdepartment: Department[] = initalDepartments.filter((dep) => dep.id === staff?.department?.id);
		setDepartment((s) => s = filterdepartment[0])
	}, [asset, department])
	// console.log(asset?.ownerId)
	console.log(staff)
	const [selectedItem, setSelectedItem] = useState(2);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
	const [isModalOpenThree, setIsModalOpenThree] = useState(false);
	const [isUnAllocateModalOpen, setUnAllocateModalOpen] = useState(false)

	const handleUnAllocateModal = () => {
		setUnAllocateModalOpen((m) => m = false)
	}
	const fileInputRef = useRef(null);

	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleAssignModal = () => {
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

						<p> Status: {asset?.active ? "Avaliable" : "In Use"} </p>

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
					{!asset?.active&&	<button
							style={{
								color: "black",
								backgroundColor: "white",

							}}
							onClick={()=>setUnAllocateModalOpen(true)}
						>
							Unallocate
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




					<div>
						<Modal
							isOpen={isModalOpen}
							onRequestClose={() => setIsModalOpen(false)}
							className='modal-content custom-property'
							overlayClassName='modal-overlay'
						>
							<AssignAsset asset={asset!} handleModal={handleAssignModal} />
						</Modal>
					</div>

					<div>
						<Modal
							isOpen={isUnAllocateModalOpen}
							onRequestClose={() => setUnAllocateModalOpen(false)}
							className='modal-content custom-property'
							overlayClassName='modal-overlay'
						>
							<UnallocateAsset staff={staff!} asset={asset!} handleModal={handleUnAllocateModal} />
						</Modal>
					</div>



					<div >
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



					<div >
						<Modal
							isOpen={isModalOpenThree}
							onRequestClose={() => setIsModalOpenThree(false)}
							className='modal-content custom-property'
							overlayClassName='modal-overlay'
						>
							<EditAsset asset={asset!} />

						</Modal>
					</div>

				</section>
				{!asset?.active &&
					<section className='two'>
						<div className='col'>
							<h4> {staff?.firstName} {staff?.lastName}  </h4>

							<p> Employee ID: {staff?.id} </p>

							<p> Departement: {staff?.department?.name} </p>

							<p> Role: {Role[staff?.role!]} </p>
							<p> Assign Date: {asset?.assignDateTime?.toLocaleDateString()} </p>
							<p>Assign Reason: {asset?.assignReason}</p>

							<button
								onClick={() => { navigate(`/staffs/${staff?.id}`) }}
							>Detail</button>
						</div>

					</section>
				}
			</div>
		</div>

	);
}

export default PropertyDetail;
