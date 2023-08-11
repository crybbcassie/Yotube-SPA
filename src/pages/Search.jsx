import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Input,
  Space,
  Button,
  HeartOutlined,
  HeartTwoTone,
  BuildTwoTone,
  AppstoreTwoTone,
} from "../components/antd/antd";
import Header from '../components/header/Header'
import { useNavigate } from "react-router-dom";
import cl from '../components/styles/Components.module.css'

export default function Search(){
  const [value, setValue] = useState("");
const [isFavorite, setIsFavorite] = useState(false);
 const handleFavorite = () => {
   setIsFavorite(!isFavorite);
 };

 const handleInputChange = (e) => {
   setValue(e.target.value);
 };


   const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const btn = `Favorites ♡`;

  // function search(){
  // dispatch(fetchVideos())
  // }
  //  useEffect(() => {
  //    const getDataVideo = async () => {
  //      try {
  //        const response = await getVideo(params.id);
  //         setVideoData(response);
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    };
  //    getDataVideo();
  //  }, []);

    const navigate = useNavigate();
    function nav() {
      navigate("/youtube-spa/favorites");
    }

    return (
      <>
        <Header btn={btn} nav={nav} />
        <div className="main search">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              size="large"
              placeholder="Enter a request"
              value={value}
              onChange={handleInputChange}
              addonBefore={
                <div onClick={handleFavorite}>
                  {isFavorite ? (
                    <HeartTwoTone style={{ fontSize: "20px" }} />
                  ) : (
                    <HeartOutlined style={{ fontSize: "20px" }} />
                  )}
                </div>
              }
            />
            <Button
              size="large"
              type="primary"
              // onClick={() => search()}
            >
              Search
            </Button>
          </Space.Compact>
          <div className={cl.layout}>
            <BuildTwoTone
              style={{ fontSize: "25px", padding: "10px 5px", cursor: "pointer" }}
            />
            <AppstoreTwoTone
              style={{ fontSize: "25px", padding: "10px 5px", cursor: "pointer" }}
            />
          </div>
        </div>
      </>
    );
}