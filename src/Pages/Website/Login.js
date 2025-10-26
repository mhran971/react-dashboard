import axios from "axios";
import "../../SignUp.css";
import React from "react";
import Header from "../../Components/Header";

export default function Login() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [accept, setaccept] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  console.log(email);
  console.log(password);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setaccept(true);
    if (password.length < 8) flag = false;
    else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/Dashboard";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }

  return (
    <div className="login">
      <Header />
      <div className="father">
        <form className="form-father" onSubmit={Submit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email..."
            requir="true"
          />
          {accept && emailError === 422 && (
            <p className="error">Email has been taken</p>
          )}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password..."
            requir="true"
          />
          {password.length < 8 && accept === true && (
            <p className="error">Password have to be at least 8 chars</p>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
