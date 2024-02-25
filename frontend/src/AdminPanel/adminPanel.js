import {Link,Outlet} from "react-router-dom"



function AdminPanel(){



    return(
        <>
       <div className="adminPanel">
            <div>
            <Link to="/add-clothes">AddClothes</Link>
            </div>
            <div>
            <Link  to="/add-electronics" >AddElectronics</Link>
            </div>
       </div>
    <Outlet/>
        </>
    )
}

export default AdminPanel