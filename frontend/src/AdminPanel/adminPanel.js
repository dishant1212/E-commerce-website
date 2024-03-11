import { useState } from "react"
import {Link,Outlet} from "react-router-dom"




function AdminPanel(){


    return(
        <div className="admin-panel">
       <div className="adminPanelLeftContainer">
            <div>
            <Link className="adminPanel-link addClothes" to="/admin-panel/add-clothes" > 
            AddClothes</Link>
           </div>
           <div>
                   <Link className="adminPanel-link" to="/admin-panel/add-clothes-men">AddMenClothes</Link> 
         </div>

         <div>
                   <Link className="adminPanel-link" to="/admin-panel/add-clothes-women">AddWomenClothes</Link> 
         </div>
         
           <div>
            <Link className="adminPanel-link" to="/admin-panel/add-electronics" >AddElectronics</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-health-products">AddHealthProducts</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-beautypicks-products">AddBeautyPicksProducts</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-petcare-products">AddPetCareProducts</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-grocery-products">AddGroceryProducts</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-furniture">AddFurniture</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/add-discoverfashion-products">AddDiscoverFashionProducts</Link>
            </div>
            <div>

                <Link className="adminPanel-link" to="/admin-panel/Start-your-fitness-journey">Add FitnessProducts</Link>
            </div>
       </div>
    <Outlet/>
        </div>
    )
}

export default AdminPanel