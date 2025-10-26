import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Website/SignUp.js";
import "./Components/Dashboard.css";

import Login from "./Pages/Website/Login.js";
import Home from "./Pages/Website/Home.js";
import Users from "./Pages/Dashboard/Users/Users";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import UpdateUser from "./Pages/Dashboard/Users/UpdateUser";
import CreateUser from "./Pages/Dashboard/Users/CreateUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route excat path="users" element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="users/createUser" element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  );
}
