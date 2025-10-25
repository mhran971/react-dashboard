import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserForm(props) {
  const [name, setName] = React.useState(props.name || "");
  const [email, setEmail] = React.useState(props.email || "");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [accept, setAccept] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  const formUpdateUserStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // padding:" 2rem",
    background: " white",
    borderRadius: " 8px",
    gap: "1rem",
    fontFamily: "Cairo",
    flexWrap: " wrap",
    marginTop: "0px",
    boxShadow: "none",
  };
  const wrapformUpdateUserStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "auto",
    backgroundColor: "#ffffffff",
    flexWrap: "wrap",
    marginTop: "0px",
    boxShadow: "none",
  };

  useEffect(() => {
    setName(props.name || "");
    setEmail(props.email || "");
  }, [props.name, props.email]);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name.length === 0 || password.length < 8 || password !== passwordR)
      flag = false;
    else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          }
        );
        if (res.status === 200) {
          props.hasLocalStorage && window.localStorage.setItem("email", email);
          window.location.pathname = `${props.navigateTo}`;
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }

  return (
    <div>
     <h1>{props.title}</h1>


      <div
        style={props.iswrapformUpdateUserStyle ? wrapformUpdateUserStyle : null}
        className="father"
      >

        <form
          style={props.isformUpdateUserStyle ? formUpdateUserStyle : null}
          className="form-father"
          onSubmit={Submit}
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
            requir="true"
          />
          {name.length === 0 && accept && (
            <p className="error">Username is required</p>
          )}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {password.length < 8 && password.length > 0 && accept === true && (
            <p className="error">Password have to be at least 8 chars</p>
          )}
          <label htmlFor="verifiedpassword">Verified Password: </label>
          <input
            type="password"
            id="passwordR"
            name="passwordR"
            value={passwordR}
            onChange={(e) => setpasswordR(e.target.value)}
            placeholder="Verified password..."
            requir="true"
          />
          {password !== passwordR && accept === true && (
            <p className="error">Varified password doesn't matched</p>
          )}
          <button type="submit">{props.button}</button>
        </form>
      </div>
    </div>
  );
}
