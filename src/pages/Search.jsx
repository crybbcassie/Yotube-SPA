import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { Input, Space, Button,} from "antd";
import Header from '../components/header/Header'
import { useNavigate, useParams } from "react-router-dom";
import { fetchVideos } from "../redux/videoSlice";
import { addFav } from "../redux/favsSlice";
import List from '../components/list/List'
import EditModal from "../components/modals/EditModal";

export default function Search(){
const btn = `Go to favorites`;
const [selectedOption, setSelectedOption] = useState("List");
const [query, setQuery] = useState({
  search: "",
});
const [onDemand, setOnDemand] = useState('')
const videos = useSelector((state) => state.videos.videos);
const favs = useSelector((state) => state.favs.favs)
const dispatch = useDispatch();
const record = {
  search: query.search,
  result: 10,
  sort: "relevance",
};

  const [open, setVisible] = useState(false);
  const handleBuyClick = (record) => {
    // setSelectedRecord(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

const handleOptionChange = (value) => {
  setSelectedOption(value);
};

const { request } = useParams();

  useEffect(() => {
    if (request) {
      setQuery(request);
      console.log(record)
      dispatch(fetchVideos(record));
    }
  }, [request, dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchVideos(record)
    );
    setOnDemand(query.search);
  };

    const navigate = useNavigate();
    const nav = () => {
      navigate("/youtube-spa/favorites");
    }

const handleFavorite = (event) => {
  event.stopPropagation();
  dispatch(addFav(record));
};

const handleAddToFav = (event) => {
  handleFavorite(event);
  handleBuyClick();
};

const isFavorite = (str) => {
      return (
        (!query.search) ||
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
                  onClick={(e) => handleFavorite(e, { search: query.search })}
                  className={isFavorite(query.search) ? "disabled" : ""}
                >
                  {isFavorite(query.search) ? (
                    <HeartTwoTone style={{ fontSize: "20px" }} />
                  ) : (
                    <HeartOutlined style={{ fontSize: "20px" }} />
                  )}
                  <EditModal
                    open={open}
                    onCancel={handleCancel}
                    onOk={handleAddToFav}
                  />
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