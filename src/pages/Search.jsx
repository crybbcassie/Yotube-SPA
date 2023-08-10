import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideos } from "../redux/videoSlice";
import { Input, Space, Button} from "../components/antd/antd";
import Header from '../components/header/Header'
import cl from '../components/styles/Components.module.css'
import { getVideo } from "../utils/helpers";

export default function Search(){
   const [videoData, setVideoData] = useState(null);
   console.log(videoData)
  const dispatch = useDispatch();
  const params = useParams();

  // function search(){
  // dispatch(fetchVideos())
  // }
   useEffect(() => {
     const getDataVideo = async () => {
       try {
         const response = await getVideo(params.id);
          setVideoData(response);
       } catch (error) {
         console.log(error);
       }
     };
     getDataVideo();
   }, []);

    return (
      <>
        <Header />
        <div className="main">
          <Space.Compact style={{ width: "100%" }}>
            <Input size="large" defaultValue="How to play chess?" />
            <Button size="large" type="primary" 
            // onClick={() => search()}
            >
              Search
            </Button>
          </Space.Compact>

          

            {videoData && 
            <div className={cl.videoList}>
              
            </div>}

        </div>
      </>
    );
}