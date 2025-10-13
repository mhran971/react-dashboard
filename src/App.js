import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import "./Components/Dashboard.css";
import Login from "./Login";
import Home from "./Home";
import Users from "./Users";
import Dashboard from "./Components/Dashboard";
import UpdateUser from "./Components/UpdateUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route  path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}
