import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../utils/Verification";
import { Input, Button, Radio, Space } from "../components/antd/antd";
import icon from "../components/images/icon.svg";


export default function SignUp({ onFormSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const userRegisterData = {
    username: username,
    email: email,
    password: password,
    gender: gender,
    age: age,
  };
  console.log(userRegisterData);
  //   const navigate = useNavigate();

  //   function changePage() {
  //     onFormSwitch("login");
  //     navigate("/Todo");
  //   }

  return (
    <>
      <div className="wrapper">
        <img src={icon} alt="icon" />
        <form className="content register" onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            name="text"
          ></Input>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
          ></Input>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
          ></Input>
          <Radio.Group onChange={onChangeGender} value={gender}>
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </Radio.Group>
          <Input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Age"
            type='number'
          ></Input>

          <Button
            // onClick={() => register(userRegisterData)}
            type="primary"
          >
            Sign Up
          </Button>
        </form>
      </div>

      <h3
      //   onClick={() => changePage()}
      >
        Already have an account? <a>Log In!</a>
      </h3>
    </>
  );
}
