import { Table, EditTwoTone, DeleteTwoTone } from "../components/antd/antd";
import cl from '../components/styles/Components.module.css'
import EditModal  from "../components/modals/EditModal";
import Header from '../components/header/Header'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {removeFav} from '../redux/favsSlice'


export default function Favorites(){
const btn = `Back to search`;
const dispatch = useDispatch()
const favs = useSelector((state) => state.favs.favs);
console.log(favs);

  const [open, setVisible] = useState(false);
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
           style={{ fontSize: "25px", cursor: "pointer", textAlign: 'ceneter' }}
         />
       ),
       onCell: (record) => ({
         onClick: () => dispatch(removeFav(record)),
       }),
     },
   ];

 const data = favs.map((fav) => ({
   key: fav.search,
   title: fav.search,
 }));

  const navigate = useNavigate();
  function nav(){
    navigate('/youtube-spa/search')
   }

    return (
      <>
        <Header btn={btn} nav={nav}/>
        <div className="main favs">
          <h1 className={cl.fav}>Favorites</h1>
          <Table
            dataSource={data}
            columns={columns}
            style={{ width: "inherit" }}
          />
          <EditModal open={open} onCancel={handleCancel} />
        </div>
      </>
    );
}