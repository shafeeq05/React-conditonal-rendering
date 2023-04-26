import { useState } from "react";

const Login = () => {
  const [login,setLogin] = useState([])
  const [ data,setData]= useState('')

 function fun(){
  if(!data){alert("enter a item"); return;}
  const addI={
    id: Math.floor(Math.random()*1000),
    value: data
  }
  setLogin(list=>[...list,addI])
  setData("")
  // console.log(login);
 
 }
 function removeItem(id){
  console.log(id);
  const rmv = login.filter((login)=> login.id!==id)
  setLogin(rmv)
 }

    return (
        <>
        <div className="login">
        
          <h3>this is login page</h3> 
        
          <input type="text" id="user"  onChange={e=>setData(e.target.value)}/>
          <input type="password" placeholder="Password" name="pass"/>
          <button type="submit" onClick={fun}>Login</button>
         
          
        </div>
        <ul>
        {login.map((item)=>{
          return(
            <><li key={item.id}>
            {item.value}<button onClick={()=> removeItem(item.id)}>Remove</button>
            </li>
            </>
          )
        })
          }
        </ul>
        </>
    );
}

export default Login;
