import { useState } from "react";
import { Input, Button, Form, Checkbox } from "../components/antd/antd";
import { useNavigate } from "react-router-dom";
import icon from  '../components/images/icon.svg'

export default function LogIn({ onFormSwitch, updateToken }) {
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();

  const userLoginData = {
    email: email,
    password: password,
  };

  // console.log(userLoginData);

  function handleSubmit(e) {
    e.preventDefault();
  }

//   function changePage() {
//     onFormSwitch("register");
//     navigate("/SignUp");
//   }

  return (
    <>
      <div className="wrapper">
        <img src={icon} alt="icon" />
        <form className="content login" onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Login"
            id="email"
            name="email"
          ></Input>

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          ></Input>

          <Button type="primary" className="primary"
          //   onClick={() => login(userLoginData, navigate, updateToken)}
          >
            Log In
          </Button>
        </form>
      </div>

      <h3
      //   onClick={() => changePage()}
      >
        Don't have an account? <a>Sign Up!</a>
      </h3>
    </>
  );
}
