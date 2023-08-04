import cl from "../styles/Components.module.css";
import icon from "../images/icon.svg";
import {Tabs, Button} from '../antd/antd'

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

    return (
      <div className={cl.header}>
        <div className={cl.tabs}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            style={{ fontSize: "116px" }}
          />
        </div>
        <img src={icon} alt="icon" />
        <Button>Log Out</Button>
      </div>
    );
}