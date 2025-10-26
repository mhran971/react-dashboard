import axios from "axios";
import "../../SignUp.css";
import React from "react";
import Header from "../../Components/Header";
import UserForm from "../../Components/Forms/UserForm";

export default function SignUp() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [accept, setaccept] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  console.log(name);
  console.log(email);
  console.log(password);
  console.log(passwordR);

  return (
    <div className="signup">
      <div>
        <Header />
      </div>
      <UserForm
        // title="Sign Up"
        button="Register"
        endPoint="register"
        navigateTo="/dashboard/users"
        hasLocalStorage={true}
        isformUpdateUserStyle={false}
        iswrapformUpdateUserStyle={false}
      />
    </div>
  );
}
