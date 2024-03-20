import { Link } from "react-router-dom";
import { User } from "../../Domain/User/User";
import { Asset } from "../../Domain/Asset/Asset";
import Modal from "react-modal";
import { assert } from "console";
import { useState } from "react";
interface Props{
    staff:User,
    asset:Asset,
    handleModal:()=>void

}
function UnallocateAsset(props:Props){
    const MisAllocate = ()=>{
        props.asset.owner = undefined
        props.asset.assignReason= undefined
        props.asset.active=true
        props.asset.assignDateTime= undefined
    }

    return (
        <div>
        <p style={{ fontSize: "20px", margin: "0" }}>
            Are you sure you want to unallocate {props.asset.id} from
        </p>
        <h2> {props.staff.id}?</h2>
        <div className='buttons'>
            <button
                   onClick={() => props.handleModal()}
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
                        MisAllocate()
                        props.handleModal()
                    
                    }}
                >

                    unallocate
                </button>
           
        </div>
    </div>
    )
}
export default UnallocateAsset