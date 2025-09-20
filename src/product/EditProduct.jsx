import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
    const {id}=useParams();
    const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
    const navigate=useNavigate();
    const getToEditProduct=()=>{
        axios.get(`http://localhost:5000/products/${id}`).then(res=>
        {     
            if(res.status===200)
              {
                for(let pro in res.data)
                {
                    //console.log(pro +"=>"+res.data[pro]);
                    setValue(pro,res.data[pro]);
                    
                }
              }
        }
        ).catch(error=>
        {
            console.log(error);
        }
        );
       
    }
     function updateToData(product){
             axios.put(`http://localhost:5000/products/${product.id}`,product).then(res=>
             {
                if(res.status===200){
                    alert("Product Updated")
                    navigate("/view");
                }
             }
             ).catch();
        }
    useEffect(getToEditProduct,[]);
  return (
    <div className='card'>
        <h1 className='text-center text-warning fs-2'>EditProduct here--!</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit(updateToData)}>
                  <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Name :</label>
                        <input type='text' className='form-control' {...register('productName')}></input>
                    </div>
                    <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Description :</label>
                        <input type='text' className='form-control' {...register('description')}></input>
                    </div>
                    <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Category :</label>
                        <input type='text' className='form-control' {...register('category')}></input>
                    </div>

                    <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Price :</label>
                        <input type='text' className='form-control' {...register('price')}></input>
                    </div>
                    <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Quantity :</label>
                        <input type='text' className='form-control' {...register('quantity')}></input>
                    </div>
                    <div className='form-group d-flex mb-2 mt-3'>
                    <label className='form-label'>Enter Product Supplier :</label>
                        <input type='text' className='form-control' {...register('supplier')}></input>
                    </div>
                    <div className='form-group d-flex mb-2 mt-3'>
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

export default EditProduct;