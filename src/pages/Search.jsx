import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input, Space, Button} from "../components/antd/antd";
import Header from '../components/header/Header'
import { useNavigate } from "react-router-dom";

export default function Search(){
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
      console.log("-------");
    }

    return (
      <>
        <Header btn={btn} nav={nav} />
        <div className="main">
          <Space.Compact style={{ width: "100%" }}>
            <Input size="large" defaultValue="How to play chess?" />
            <Button
              size="large"
              type="primary"
              // onClick={() => search()}
            >
              Search
            </Button>
          </Space.Compact>
        </div>
      </>
    );
}