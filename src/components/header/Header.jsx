import cl from "../styles/Components.module.css";
import icon from "../images/icon.svg";
import {Tabs, Button} from '../antd/antd'
import { useNavigate } from "react-router-dom";

export default function Header(){
    const items = [
      {
        key: "1",
        label: `Search`,
        children: ``,
      },
      {
        key: "2",
        label: `Favorites`,
        children: ``,
      },
    ];

    const navigate = useNavigate()
    function logOut() {
      localStorage.removeItem("token");
      navigate("/youtube-spa/login");
      window.location.reload();
    }

    return (
      <div className={cl.header}>
        <div className={cl.headerLeft}>
          <img src={icon} alt="icon" style={{ width: "80px" }} />
          <div className={cl.tabs}>
            <Tabs defaultActiveKey="1" items={items} size={'large'} />
          </div>
        </div>
        <Button onClick={() => logOut()}>Log Out</Button>
      </div>
    );
}