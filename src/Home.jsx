import React,{useState,useEffect} from 'react';




export default function Home() {
    const [data,setData]=useState([])
    const [quot,setQuotes]= useState([])
 
    useEffect( ()=>{
      
        async function hello(){
            const fet = await fetch("https://dummyjson.com/products")
            const data = await  fet.json()
                setData(data.products)
        }
        hello()
},[])

 
 console.log(data,"rtfyguhk");



    //------------------------------------------
    return (
        <>
        <div className='home'>
            <h2>Welcome to Home page</h2>
        </div>
      
                <ol>
                {data.map((ele)=>{
                   return <li key={ele.id}>{ele.title}<h3>{ele.brand}</h3> 
                   <img src={ele.images[0]}/><p>{ele.description}</p></li>
                })}
                </ol>
        </>
    );
}


