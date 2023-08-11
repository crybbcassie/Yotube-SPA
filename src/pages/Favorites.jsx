import { Table, EditTwoTone, DeleteTwoTone } from "../components/antd/antd";
import cl from '../components/styles/Components.module.css'
import EditModal  from "../components/modals/EditModal";
import { useState } from "react";

export default function Favorites(){
  const [visible, setVisible] = useState(false);
  const handleBuyClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

   const columns = [
     {
       title: "Title",
       dataIndex: "title",
       key: "title",
       width: 600,
     },
     {
       title: "Edit",
       dataIndex: "edit",
       key: "edit",
       render: () => (
         <EditTwoTone
           style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={handleBuyClick}
         />
       ),
        onCell: (record) => ({
          onClick: () => handleBuyClick(record),
        }),
     },
     {
       title: "Delete",
       dataIndex: "delete",
       key: "delete",
       render: () => (
         <DeleteTwoTone
           style={{ fontSize: "25px", cursor: "pointer" }}
         />
       ),
      //  onCell: (record) => ({
      //    onClick: () => dispatch(removeVideo(record)),
      //  }),
     },
   ];

   const data = [
     {
       key: 'qew',
       title: 'qfffffffffffffffqq'
     },
   ];

    return (
      <div className="main">
        <h1 className={cl.fav}>Favorites</h1>
        <Table
          dataSource={data}
          columns={columns}
          style={{ width: "inherit" }}
        />
        <EditModal open={visible} onCancel={handleCancel} />
      </div>
    );
}