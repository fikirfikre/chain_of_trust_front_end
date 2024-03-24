import SideBar from "../components/SideBar"

interface Props{
    child:JSX.Element
}
function Main(props:Props){
  return(
    <div className="app">
        <SideBar/>
        <div className="main-content">
           {props.child}
        </div>
    </div>
  )
}
export default Main