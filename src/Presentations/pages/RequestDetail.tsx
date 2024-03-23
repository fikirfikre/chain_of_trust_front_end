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
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import { AssetRequest } from "../../Domain/AssetRequest/AssetRequest";
import { AssetMaintenanceRequest } from "../../Domain/Maintenance/AssetMaintenanceRequest";
import { LoggedUser, initalAssetRequest, initalAssets, initalStaffs } from "../../Domain/list";
import { Role } from "../../Domain/User/User";
import ReasonTextArea from "../components/ReasonTextArea";
//pending - approved -false rejected - false
//approved - approved - true rejected - false
//rejected - approved - false rejected - true

function RequestDetail() {

    const [selectedItem, setSelectedItem] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRejectModalOpen, setRejectModalOpen] = useState(false);
    const [isForwardModalOpen, setForwardModalOpen] = useState(false);
    const [approveReason,setApproveReason]=useState<string>();
    const [rejectReason,setRejectReason]=useState<string>();
    const [isForward,setForward]=useState<boolean>(false);

    const handleApproveReason = (reason:string)=>{
          setApproveReason((r)=>r=reason)
    }
    const handleRejectReason = (reason:string)=>{
        setRejectReason((r)=>r=reason)
  }
  const approveClicked = ()=>{
      request.approved=true;
      request.resolveDatetime=new Date(Date.now());
      request.approvedReason=approveReason
    
  }
  const rejectedClicked = ()=>{
    request.rejected = true;
    request.resolveDatetime=new Date(Date.now());
    request.rejectionReason = rejectReason
  }
  const handleForward = ()=>{
         request.forward=true
  }


    const fileInputRef = useRef(null);

    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedOption, setSelectedOption] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const { requestId } = useParams();
    const [request, setRequest] = useState<AssetRequest | AssetMaintenanceRequest>(
        {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            user: initalStaffs[0],
            asset: initalAssets[0],  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
            questionReason:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis id aperiam? Sunt, minima. Facere in ullam ut quam modi.",
          },
    )
    let status;
    useEffect(() => {
        const filterRequest = initalAssetRequest.filter((request) => request.id == requestId);
        setRequest((r) => r = filterRequest[0])
    }, [requestId])
    if (request?.approved == false && request.rejected == false) {
        status = "Pending"
    }
    if (request?.approved == true && request.rejected == false) {
        status = "Approved"
    }
    if (request?.approved == false && request.rejected == true) {
        status = "Rejected"
    }
    console.log(request)
    // const handleFileChange = (event) => {
    // 	const selectedFile = event.target.files[0];
    // };

    // const handleOptionClick = (option) => {
    // 	setSelectedOption(option);
    // 	setDropdownOpen(false);
    // };
    return (
        <div className='request-detail'>

            <div className='body'>
                <section className='one'>
                    <div className='col'>
                        <h3>Asset Request</h3>
                        <ul>
                            <li>Request ID:  {request?.id} </li>

                            <li>Asset ID: {request?.asset.id}  </li>
                            <li>Employee ID: {request?.user.id} </li>
                            <li>Status: {status} </li>
                            <li>Date submitted: {request?.createDatetime.toLocaleDateString()} </li>
                            <li>Date resolved: {request?.resolveDatetime == undefined ? "-" : request?.resolveDatetime.toLocaleDateString()}</li>

                        </ul>
                    </div>
                    <div className='col2'>
                        <h3> Description</h3>
                        <ul>
                            <li>
                                <h4>Reason For Request</h4>
                                <p>{request?.questionReason}</p>
                            </li>
                            {request?.rejected &&
                                <li>

                                    <h4>Reason For Request Rejection</h4>
                                    <p>{request?.rejectionReason}</p>

                                </li>
                            }
                            {request?.approved &&
                                <li>
                                    <h4>Reason For Request Approved</h4>
                                    <p>{request?.approvedReason}</p>
                                </li>
                            }

                        </ul>

                    </div>
                </section>
                {status === "Pending" &&
                    <div className="buttons">
                        {LoggedUser.role === Role.Admin && <button className="verify-button" onClick={() => setIsModalOpen(true)}>Approve</button>}
                        <button className="reject-button" onClick={() => setRejectModalOpen(true)}>Reject</button>
                        {LoggedUser.role === Role.Manager && <button className="verify-button" onClick={() => setForwardModalOpen(true)}>Forward</button>}
                    </div>
                }

                {isModalOpen && (
                    <div className='modal-overlay'>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            className='modal-content custom-property'
                            overlayClassName='modal-overlay'
                        >
                            <h2> Approve request </h2>
                            <div className='inputs'>
                            </div>
                            <div
                                className='area'
                                style={{
                                    marginLeft: "20px",
                                    textAlign: "start",
                                    fontSize: "18px",
                                    fontWeight: "100",
                                }}
                            >
                                <h3> Reason For Approve </h3>
                                <ReasonTextArea handleinputchange={handleApproveReason}/>
                            </div>
                            <div className='inputs'>

                                <div className='buttons'>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        style={{
                                            color: "white",
                                            backgroundColor: "black",

                                        }}
                                    >
                                        Cancel
                                    </button>
                                    
                                        <button
                                            style={{
                                                color: "black",
                                                backgroundColor: "white",

                                            }}
                                            onClick={()=>{
                                                approveClicked()
                                            }}
                                        >
                                            Approve
                                        </button>
                                    
                                </div>
                            </div>
                        </Modal>
                    </div>
                )}


                {isRejectModalOpen && (
                    <div className='modal-overlay'>
                        <Modal
                            isOpen={isRejectModalOpen}
                            onRequestClose={() => setRejectModalOpen(false)}
                            className='modal-content custom-property'
                            overlayClassName='modal-overlay'
                        >
                            <h2> Approve request </h2>
                            <div className='inputs'>
                            </div>
                            <div
                                className='area'
                                style={{
                                    marginLeft: "20px",
                                    textAlign: "start",
                                    fontSize: "18px",
                                    fontWeight: "100",
                                }}
                            >
                                <h3> Reason For Rejection </h3>
                                <ReasonTextArea handleinputchange={handleRejectReason}/>
                            </div>
                            <div className='inputs'>

                                <div className='buttons'>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        style={{
                                            color: "white",
                                            backgroundColor: "black",

                                        }}
                                    >
                                        Cancel
                                    </button>
                                    
                                        <button
                                            style={{
                                                color: "black",
                                                backgroundColor: "white",

                                            }}
                                            onClick={()=>{
                                                rejectedClicked()
                                            }}
                                        >
                                            Reject
                                        </button>
                                    
                                </div>
                            </div>
                        </Modal>
                    </div>
                )}

                <Modal isOpen={isForwardModalOpen}
                    onRequestClose={() => setForwardModalOpen(false)}
                    className='modal-content custom-property'
                    overlayClassName='modal-overlay' >
                    <div>
                        <p style={{ fontSize: "20px", margin: "0" }}>
                            Are you sure you want to Forward
                        </p>
                        <h2> {request?.id}</h2>
                        <div className='buttons'>
                            <button
                                onClick={() => setForwardModalOpen(false)}
                                style={{
                                    color: "white",
                                    backgroundColor: "black",

                                }}
                            >
                                No
                            </button>

                            <button
                                style={{
                                    color: "black",
                                    backgroundColor: "white",

                                }}
                                onClick={() =>{ setForwardModalOpen(false)
                                handleForward()}}
                            >
                                Yes
                            </button>

                        </div>
                    </div>
                </Modal>
            </div>
        </div>

    );
}

export default RequestDetail;
