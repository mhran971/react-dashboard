import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="Side-Bar">
      {/* <h1>  SideBar</h1> */}
      <Link to="/Dashboard/users" className="sb-btn" style={{flexDirection:"row" ,hover:"#ffffffff"}}>
        <i class="fa-solid fa-users" style={{  color:"#00c25eff" }}></i>
        <span className="preserve-whitespace"> Users </span>
      </Link>
    </div>
  );
}
