import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
  
  const [product,setproduct]=useState([])
  const [loading,setloading]=useState(false)
  async function fechdata(){
    setloading(true)
    const respone = await fetch('https://fakestoreapi.com/products?limit=4')
    // console.log(respone)
    const data = await respone.json()
    // console.log(data)
    setproduct(data)
    setloading(false)
  }
  useEffect(()=>{
    fechdata()
  },[])
  return (
    <>
    <div className="max-w-[80%] mx-auto my-5">
    
      <div className="grid grid-cols-4 gap-5 ">
        
        {
          product.map(function(item,index){
            return(
              <div key={index} className="bg-slate-200 gap-5 rounded-xl">
                <Link to={`/product/${item.id}`}>
                  <img  src={item.image} alt="" />
                    <h1>{item.title}</h1>
                </Link>
                
              </div>
            )
          })
        }
        {
          loading && <><h1 className="text-[40px]">loading . . . . . .</h1></>
        }
      </div>
    </div>
      
      
    </>
  )
}

export default Home
