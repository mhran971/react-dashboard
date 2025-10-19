import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
 

  const { id: userId } = useParams();

  useEffect(() => {
    async function fetchUserById() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/user/showbyid/${userId}`);
        const data = await res.json();
        setName(data[0].name || "");
        setEmail(data[0].email || "");
      } catch (err) {
        console.log("fetch user by id error:", err);
      }
    }

    fetchUserById();
  }, [userId]);

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);

    if (name.length === 0 || password.length < 8 || password !== passwordR) return;

    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/user/update/${userId}`,
        {
          name,
          email,
          password,
          password_confirmation: passwordR,
        }
      );

      if (res.status === 200) {
        window.localStorage.setItem("email", email);
        window.location.pathname = "/dashboard/users";
      }
    } catch (err) {
      console.log("update user error:", err.response ? err.response.data : err.message);}
  }



  return (
    <div className="signup">
      <div className="father">
        <form className="form-father" onSubmit={Submit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
            required
          />
          {accept && name.length === 0 && (
            <p className="error">Username is required</p>
          )}

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            required
          />
          {accept &&  (
            <p className="error">Email has been taken</p>
          )}

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            required
          />
          {/* {password.length < 8 && accept && (
            <p className="error">Password must be at least 8 characters</p>
          )} */}

          <label htmlFor="passwordR">Confirm Password: </label>
          <input
            type="password"
            id="passwordR"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
            placeholder="Confirm password..."
            required
          />
          {/* {password !== passwordR && accept && (
            <p className="error">Passwords do not match</p>
          )} */}

          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
}
