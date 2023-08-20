import { Table, EditTwoTone, DeleteTwoTone } from "../components/antd/antd";
import cl from '../components/styles/Components.module.css'
import EditModal  from "../components/modals/EditModal";
import Header from '../components/header/Header'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {removeFav} from '../redux/favsSlice'
import { fetchVideos } from "../redux/videoSlice";


export default function Favorites(){
const btn = `Back to search`;
const dispatch = useDispatch()
const favs = useSelector((state) => state.favs.favs);

  const [selectedRecord, setSelectedRecord] = useState({});

  const [open, setVisible] = useState(false);
  const handleBuyClick = (record) => {
    setSelectedRecord(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
    const navigate = useNavigate();
    function nav() {
      navigate("/youtube-spa/search");
    }

  function openFav(record){
    nav();
    dispatch(fetchVideos(record))
  }

   const columns = [
     {
       title: "Title",
       dataIndex: "search",
       key: "search",
       width: 600,
       onCell: (record) => ({
         onClick: () => openFav(record),
       }),
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
         <DeleteTwoTone style={{ fontSize: "25px", cursor: "pointer" }} />
       ),
       onCell: (record) => ({
         onClick: () => dispatch(removeFav(record)),
       }),
     },
   ];

 const data = favs.map((fav) => ({
  id: fav.id,
   key: fav.search,
   search: fav.search,
   result: fav.result,
   sort: fav.sort
 }));

    return (
      <>
        <Header btn={btn} nav={nav} />
        <div className="main favs">
          <h1 className={cl.fav}>Favorites</h1>
          <Table
            dataSource={data}
            columns={columns}
            style={{ width: "inherit"}}
          />
          <EditModal
            open={open}
            onCancel={handleCancel}
            record={selectedRecord}
          />
        </div>
      </>
    );
}