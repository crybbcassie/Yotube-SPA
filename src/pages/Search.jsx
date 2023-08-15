import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Input,
  Space,
  Button,
  HeartOutlined,
  HeartTwoTone,
  AppstoreOutlined,
  BarsOutlined,
  Segmented,
  Row, Col
} from "../components/antd/antd";
import Header from '../components/header/Header'
import { useNavigate } from "react-router-dom";
import cl from '../components/styles/Components.module.css'
import { fetchVideos } from "../redux/videoSlice";
import {CardVideo, ListVideo} from '../components/layout/index'
import { addFav } from "../redux/favsSlice";

export default function Search(){
const [query, setQuery] = useState("");
const videos = useSelector((state) => state.videos.videos);
const [isFavorite, setIsFavorite] = useState(false);
const [selectedOption, setSelectedOption] = useState("List");

const handleOptionChange = (value) => {
  setSelectedOption(value);
};

const handleSearch = () => {
    dispatch(fetchVideos({ search: query, results: 10, sort: "relevance" }));
  };
  const dispatch = useDispatch();
  const btn = `Favorites ♡`;


    const navigate = useNavigate();
    function nav() {
      navigate("/youtube-spa/favorites");
    }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) dispatch(addFav(query))
  };


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
            <Segmented
              options={[
                {
                  value: "List",
                  icon: <BarsOutlined />,
                },
                {
                  value: "Kanban",
                  icon: <AppstoreOutlined />,
                },
              ]}
              selected={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
          <Row gutter={[8, 16]}>
            {videos &&
              videos.map((video) =>
                selectedOption === "List" ? (
                  <ListVideo video={video} key={video.etag} />
                ) : (
                  <Col span={6} key={video.etag}>
                    <CardVideo video={video} />
                  </Col>
                )
              )}
          </Row>
        </div>
      </>
    );
}