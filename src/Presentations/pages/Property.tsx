import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./Staff.module.css"
import { initalAssets } from "../../Domain/list";
import ReactModal from "react-modal";
import RegisterProperty from "./RegisterProperty";
import { useNavigate } from "react-router-dom";
export default function Property(){
      const [assets,setAsset]=useState(initalAssets)
      const [isModalOpen,setIsModalOpen] = useState(false)
      const navigate = useNavigate()
      const handleModal = ()=>{
        setIsModalOpen(m=>m=!isModalOpen)
      }
return <div>
        <Navbar/>
        <ReactModal
    isOpen={isModalOpen}
    
    //  onRequestClose={() => setIsModalOpen(false)}
    className='modal-content custom-property'
    overlayClassName='modal-overlay'
>
  
<RegisterProperty handleModal={handleModal}/>
</ReactModal>
        <div className={styles.table_box}>
            <div className={styles.all_bar} onClick={handleModal}>
                <h3>All</h3>
                <button>+</button>
            </div>
            <table className={styles.table}>
            <thead>
                <th>Asset Id</th>
                {/* <th>Asset Name</th> */}
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
            </thead>
            <tbody>
                 {assets.map((asset)=>(
                        <tr>
                        <td>{asset.id}</td>
                        <td>
                            {asset.type}
                        </td>
                        <td>{!asset.active ? "In Use " : "Avaliable "} </td>
                        
                        <td>{asset.addDateTime.toLocaleDateString()}</td>
                        <td onClick={()=>{navigate(`/assets/${asset.id}`)}}>detail</td>
                    </tr> 
                 ))}
               
            </tbody>
        </table>
    </div>
</div>
}