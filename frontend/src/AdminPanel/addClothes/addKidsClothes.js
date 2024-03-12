import React, { useState } from 'react';
import "../adminPanel.css"

import {AddKidsCloth} from "../../redux/slices/kidsClothesSlice"
import { useDispatch,useSelector } from 'react-redux';


function AddKidsClothes(){

    const [formData, setFormData] = useState({
        imageUrl: '',
        name: '',
        price: ''
      });
      const { isSuccess }=useSelector(state=>state.KidsClothes)
      console.log(isSuccess)
      const dispatch=useDispatch()
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();
         dispatch(AddKidsCloth(formData))
        setFormData({
          imageUrl: '',
          name: '',
          price: ''
        });
        if( isSuccess){
            alert(isSuccess.msg)
         }
      };

    return(
        <>
        
        <div className='products-conatiner' >
      <h2>Add Kids Clothes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label><br />
          <input 
            type="text" 
            name="imageUrl" 
            value={formData.imageUrl} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Price:</label><br />
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Add Kids Clothes</button>
      </form>
    </div>
        </>
    )
}
export default AddKidsClothes