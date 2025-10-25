import "./SignUp.css";
import UserForm from "./Components/Forms/UserForm";

export default function CreateUser() {
  return (
    <UserForm
      key="create"
      button="Create"
      title="Create User"
      navigateTo="/dashboard/users"
      endPoint="user/create"
      hasLocalStorage={false}
      isformUpdateUserStyle={true}
      iswrapformUpdateUserStyle={true}
    />
  );
}
