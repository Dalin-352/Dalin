import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const [product,setproduct]=useState({})
  const id=useParams()
  // console.log(id)

  async function fechdataproduct(){
    const respone =await fetch(`https://fakestoreapi.com/products/${id.id}`)
    const datas=await respone.json()
    console.log(datas)
    setproduct(datas)
  }
  useEffect(()=>{
    fechdataproduct()
  },[])
  return (
    <>
      <div className='max-w-[70%] mx-auto'>
        <div className='grid grid-cols-2 my-5'> 
          <div>
            <img width={300} src={product?.image} alt="" />
          </div>
          <div className='flex flex-col justify-center px-8'>
            <p>Title : {product.title}</p>
            <p>Category : {product.category}</p>
            <p>Pride : {product.price}</p>
            <p>Description : {product.description}</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Product
