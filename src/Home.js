 import { Link } from "react-router-dom";


export default function Home(){
   return(<h1>
      <div
   style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column",backgroundColor:"#f0f2f5" }}>
   <button className="btn btn-primary" >
            <Link to="/register">Go to register</Link>

   </button>
   </div>
   </h1>) 
}