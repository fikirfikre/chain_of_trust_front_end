import { useState } from "react"
import AvaliableAssetDropdown from "../components/AvaliableAssetDropdown"
import ReasonTextArea from "../components/ReasonTextArea"
import { Asset } from "../../Domain/Asset/Asset"
import { AssetRequest } from "../../Domain/AssetRequest/AssetRequest"
import { Role, User } from "../../Domain/User/User"
import { initalDepartments } from "../../Domain/list"

interface Props{
    handleModal:()=>void
}
function CreateRequest(props:Props){
    const [isAssetDrop,setAssetDrop] = useState(false)
    const [reason,setReason]=useState("");
    const [asset,setAsset]=useState<Asset>();
    const toggleDropdown = ()=>{
        setAssetDrop(!isAssetDrop)
    }
    const handleAssetSelect = (value:Asset)=>{
          setAsset(value)
    }
    const handleReasonchange = (value:string)=>{
        setReason((r)=>r=value) 
    }
    const sendRequest = ()=>{
        const user:User=  {
            id: "user_1",
            email: "user1@example.com",
            firstName: "John",
            lastName: "Doe",
            role: Role.Manager,
            department: initalDepartments[0]
            // organizationId: "org_1",
           
          };
        const request:AssetRequest = {
             id:"req-001",
             createDatetime:new Date(Date.now()),
             user:user,
             questionReason:reason,
             asset:asset!,
        }
        console.log(request)
    }
    return<div>
         <h4><span>Asset Request</span>     <span>Maintenace Request</span></h4>
         <div className="inputs">
            <div className="row">

            </div>
            <AvaliableAssetDropdown toggleDropdown={toggleDropdown} isAssetDrop={isAssetDrop} handleInputChange={handleAssetSelect}/>
            <ReasonTextArea handleinputchange={handleReasonchange}/>
         </div>


         <div className='buttons'>
                <button
                    style={{
                        color: "white",
                        backgroundColor: "black",

                    }}
                    onClick={()=>props.handleModal()}
                >
                    Cancel
                </button>
                    <button
                        style={{
                            color: "black",
                            backgroundColor: "white",
                        }} 
                        onClick={()=>{props.handleModal()
                        sendRequest()}}   
                    >
                        Create
                    </button>      
            </div>
    </div>
}
export default CreateRequest