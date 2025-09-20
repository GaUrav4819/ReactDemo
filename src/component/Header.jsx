import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='bg-dark d-flex justify-content-between p-2'>
        <h1 className='text-warning'>Store Management App--!</h1>
        <div className='mt-2'>
            <Link className='btn btn-warning me-2' to={"/add"}>Add Product </Link>
            <Link className='btn btn-warning ms-2' to={"/view"}>View Product </Link>
            <Link></Link>
        </div>
    </div>
  )
}

export default Header;