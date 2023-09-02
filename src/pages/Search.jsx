import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Input,
  Space,
  Button,
  HeartOutlined,
  HeartTwoTone,
} from "../components/antd/antd";
import Header from '../components/header/Header'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchVideos } from "../redux/videoSlice";
import { addFav, removeFav } from "../redux/favsSlice";
import List from '../components/list/List'

export default function Search(){
const [selectedOption, setSelectedOption] = useState("List");
const [query, setQuery] = useState({
  search: "",
});
const [onDemand, setOnDemand] = useState('')
const videos = useSelector((state) => state.videos.videos);
const favs = useSelector((state) => state.favs.favs)
const dispatch = useDispatch();
const btn = `Go to favorites`;

const handleOptionChange = (value) => {
  setSelectedOption(value);
};

const { request } = useParams();

  useEffect(() => {
    if (request) {
      setQuery(request);
      dispatch(fetchVideos({ search: query.search, result: 10, sort: "relevance" }));
    }
  }, [request, dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchVideos({ search: query.search, result: 10, sort: "relevance" })
    );
    setOnDemand(query.search);
  };

    const navigate = useNavigate();
    function nav() {
      navigate("/youtube-spa/favorites");
    }

     const handleFavorite = (event) => {
       event.stopPropagation();
       dispatch(addFav(query.search));
     };

    const isFavorite = (str) => {
      return (
        (query.search ? false : true) ||
        favs.some(
          (item) =>
            item.search.trim().toLowerCase() ===
            query.search.trim().toLowerCase()
        )
      );
    };

    return (
      <>
        <Header btn={btn} nav={nav} />
        <div className="main search">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              size="large"
              placeholder="Enter a request"
              value={query.search}
              onChange={(e) =>
                setQuery(() => {
                  return {
                    search: e.target.value,
                  };
                })
              }
              addonBefore={
                <div
                  onClick={handleFavorite}
                  className={
                    isFavorite(query.search) ? 'disabled' : ''
                  }
                >
                  {isFavorite(query.search) ? (
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
          {videos.length > 0 && (
            <List
              onDemand={onDemand}
              videos={videos}
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
            />
          )}
        </div>
      </>
    );
}