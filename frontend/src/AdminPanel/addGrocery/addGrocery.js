import React, { useState } from 'react';
import "../adminPanel.css"

function AddGrocery() {
  const [formData, setFormData] = useState({
    imageUrl: '',
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
     const {imageUrl,name,price}=formData
     const fetchData=await fetch("http://localhost:5000/GroceryProducts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({imageUrl,name,price})
     })
     const resp=await fetchData.json()
     if(resp){
        alert(resp.msg)
     }else{
        alert(resp.msg)
     }
    setFormData({
      imageUrl: '',
      name: '',
      price: ''
    });
  };

  return (
    <div className='products-conatiner' >
      <h2>Add Grocery</h2>
      <form >
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
        </form>
        <button onClick={handleSubmit}>Add Grocery</button>
      
    </div>
  );
}

export default AddGrocery;
