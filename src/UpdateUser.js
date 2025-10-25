import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import UserForm from "./Components/Forms/UserForm";

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
        const res = await fetch(
          `http://127.0.0.1:8000/api/user/showbyid/${userId}`
        );
        const data = await res.json();
        setName(data[0].name || "");
        setEmail(data[0].email || "");
      } catch (err) {
        console.log("fetch user by id error:", err);
      }
    }

    fetchUserById();
  }, [userId]);

  return (
    <UserForm
      key="update"
      button="Update"
      title="Update User"
      navigateTo="/dashboard/users"
      name={name}
      email={email}
      endPoint={`user/update/${userId}`}
      hasLocalStorage={false}
      isformUpdateUserStyle={true}
      iswrapformUpdateUserStyle={true}
    />
  );
}
