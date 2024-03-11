import {useState} from "react"
import { useDispatch,useSelector } from "react-redux"
import {postWomenClothes} from "../../redux/slices/womenClotheSlice"

function AddWomenClothes(){
    const dispatch=  useDispatch()
   const { isSuccess }=useSelector(state=>state.WomenClothes)
  
    

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

  const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(postWomenClothes(formData))
      setFormData({
        
            imageUrl: '',
            name: '',
            price: ''
          
      })
      if( isSuccess){
         alert(isSuccess.msg)
      }

  }

    return(
        <>
 <div className='products-conatiner' >
      <h2>Add Women Clothes</h2>
      <form onSubmit={submitHandler}>
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
        <button type="submit">Add Women Clothes</button>
      </form>
    </div>
        
        </>
    )
}
export default AddWomenClothes