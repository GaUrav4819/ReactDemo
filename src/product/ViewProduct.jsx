import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewProduct() {
    const [products,setproducts]=useState([]);
    const getAllProduct=()=>
    {
        axios.get("http://localhost:5000/products").then(res=>{
            if(res.status==200)
        {
            console.log(res.data)
            setproducts(res.data);
        }
         }
        ).catch();
    }
    useEffect(getAllProduct,[]);
     function deleteProduct(id)
      {
       
        axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
            if(res.status===200){
                alert("Product Deleted");
               getAllProduct();
            }
        }).catch();
      }
  return (
    <div className='card'>
         <h1 className='text-center text-warning'> Product Details</h1>
         <table className='table table-striped'>
            <thead>
                <tr>
                     <th>Id</th>
                      <th width="200px">Product Name</th>
                      <th>Description</th>
                       <th>Category</th>
                        <th>Price</th>
                         <th>Quantity</th>
                          <th>Supplier</th>
                          <th>InStock</th>
                          <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr,index)=><tr key={index}>
                     <td>{pr.id}</td>   
                     <td>{pr.productName}</td>   
                     <td>{pr.description}</td>   
                     <td>{pr.category}</td>   
                     <td>{pr.price}</td>   
                     <td>{pr.quantity}</td>   
                     <td>{pr.supplier}</td>   
                     
                     <td><input type='checkbox' checked={pr.inStock} readOnly></input></td>  
                     <td><button className='btn btn-danger' onClick={()=>deleteProduct(pr.id)}><i class="bi bi-trash">
                        </i></button>
                     <Link className="btn btn-primary ms-2" to={`/edit/${pr.id}`}><i class="bi bi-pen-fill"></i></Link></td> 
                   
                    </tr> )
                }
            </tbody>
         </table>
    </div>
  )
}

export default ViewProduct;