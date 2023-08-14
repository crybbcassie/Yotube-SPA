import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
import { fetchVideos } from "../redux/videoSlice";
import CardVideo from '../components/layout/CardVideo'
import ListVideo from '../components/layout/ListVideo'

export default function Search(){
const [query, setQuery] = useState("");
const videos = useSelector((state) => state.videos.videos);
console.log(videos)
const [isFavorite, setIsFavorite] = useState(false);

const handleSearch = () => {
    dispatch(fetchVideos({ search: query, results: 10, sort: "relevance" }));
  };

 const handleFavorite = () => {
   setIsFavorite(!isFavorite);
 };
  const dispatch = useDispatch();
  const btn = `Favorites ♡`;


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
              onChange={(e) => setQuery(e.target.value)}
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
            <Button size="large" type="primary" onClick={handleSearch}>
              Search
            </Button>
          </Space.Compact>
          <div className={cl.layout}>
            <BuildTwoTone
              style={{
                fontSize: "25px",
                padding: "10px 5px",
                cursor: "pointer",
              }}
            />
            <AppstoreTwoTone
              style={{
                fontSize: "25px",
                padding: "10px 5px",
                cursor: "pointer",
              }}
            />
          </div>
            {videos && videos.map((video) => (
              // <CardVideo video={video}/>
              <ListVideo video={video}/>
            ))}
        </div>
      </>
    );
}