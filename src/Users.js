import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./all.min.css";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  
 useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => {
        if (!res.ok) {
          console.log("hello");
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  async function deleteUser(id) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}` 
      );
      
      if (res.status === 200);
      // { console.log("User deleted successfully");
        setUsers(users.filter(user=>user.id!==id))
      // }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td 
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingRight: "50px",
          alignItems: "center"

        }}
      > 
        
          <i className="fa-solid fa-trash"  style={{ cursor: "pointer", color:"red"}} onClick={() => deleteUser(user.id)} ></i>
          <i className="fa-solid fa-pen-to-square" style={{ cursor: "pointer", color:"blue"}} onClick={() => deleteUser(user.id)} ></i>

   
      </td>
    </tr>
  ));

 

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
