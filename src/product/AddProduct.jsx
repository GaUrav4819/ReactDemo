import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function AddProduct() {
  const {register,handleSubmit}=useForm();
  const flag=true;
  const saveData=(product)=>
  {
      console.log(product);
      axios.post("http://localhost:5000/products",product).then(res=>{
        if(res.status===201)
        {
          alert("Product Stored --!" )
        }
      }).catch();
      {/* <div className='form-group d-flex mb-2 mt-3'>
             <label>Enter Product Id:</label>
             <input type='text' className='form-control' {...register("id")} disabled/>         
      </div> */}
     
  }
  return (
    <div className='card'>
     <h1 className='text-center text-warning fs-2'>Add Product</h1> 
     <div className='form-container'>
     <form onSubmit={handleSubmit(saveData)}>
      
      <div className='form-group d-flex mb-2 mt-3'>
             <label>Enter Product Name:</label>
             <input type='text'className='form-control' {...register("productName")}/>         
      </div>
      <div className='form-group d-flex mb-2'>
             <label>Enter Product Description:</label>
             <input type='text' className='form-control' {...register("description")}/>         
      </div>
      <div className='form-group d-flex mb-2'>
             <label>Enter Product Category:</label>
             <input type='text' className='form-control' {...register("category")}/>         
      </div>
      <div className='form-group d-flex mb-2'>
             <label>Enter Product Price:</label>
             <input type='text' className='form-control' {...register("price")}/>         
      </div>
      <div className='form-group d-flex mb-2'>
             <label>Enter Product Quantity:</label>
             <input type='text' className='form-control'{...register("quantity")}/>         
      </div>
      <div className='form-group d-flex mb-2'>
             <label>Enter Product Supplier:</label>
             <input type='text' className='form-control'{...register("supplier")}/>         
      </div>
      <div className='form-group d-flex mb-2 '>
             <label>Product Available:</label>
             <input type='checkbox' className='text-left' {...register("inStock")}/>         
      </div>
      <div className='text-center mt-4'>
      <button className='btn btn-success' >Submit</button>
      </div>
     </form>
     </div>
      </div>
  )
}

export default AddProduct;