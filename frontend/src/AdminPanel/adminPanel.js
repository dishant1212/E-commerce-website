import { useState } from "react"
import {Link,Outlet} from "react-router-dom"
import { TiThMenu } from "react-icons/ti";



function AdminPanel(){

     const [show,setShow]=useState(false)
        

    return(
        <div className="admin-panel">
            <div className="h-[20px] text-4xl m-4 text-gray-700 fixed flex md:hidden">
            <TiThMenu onClick={()=>setShow(true)} />
            </div>
            <div className="flex ">
       <div className="adminPanelLeftContainer">
        <div className="flex justify-between border-b-[1px] border-orange-600">
        <div className='text-4xl font-semibold '> 
                <span className='text-orange-500 '>Shop</span>
                <span className='text-gray-700'>Swiftly</span>
                <p className="w-full text-start text-lg text-orange-500 font-bold">Admin-Panel</p>
         </div>
         {/* <p>Admin-Panel</p> */}
        </div>
            <div>
            <Link className="adminPanel-link addClothes" to="/admin-panel/add-clothes" > 
            AddClothes</Link>
           </div>
           {/* <div>
                   <Link className="adminPanel-link" to="/admin-panel/add-clothes-men">AddMenClothes</Link> 
         </div> */}

         {/* <div>
                   <Link className="adminPanel-link" to="/admin-panel/add-clothes-women">AddWomenClothes</Link> 
         </div> */}
         {/* <div>
            <Link className="adminPanel-link" to="/admin-panel/add-clothes-kids">AddKidsClothes</Link>
         </div> */}
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
        </div>
    )
}

export default AdminPanel