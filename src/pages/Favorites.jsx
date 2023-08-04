import {List} from '../components/antd/antd'
import cl from '../components/styles/Components.module.css'

export default function Favorites(){
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
    ];
    return (
      <div className="content">
        <h1 className={cl.fav}>Favorites</h1>
        <List
          size="large"
          bordered
          dataSource={data}
          style={{ width: "500px", backgroundColor: "#fff" }}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
}