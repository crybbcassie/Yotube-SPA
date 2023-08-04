import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../redux/videoSlice";
import { Input, Space, Button} from "../components/antd/antd";

export default function Search(){
  const videos = useSelector((state) => state.videos.videos)
  const dispatch = useDispatch();

  function search(){
  console.log('start')
  dispatch(fetchVideos())
  console.log('fin')
  }
    return (
      <>
        <Space.Compact style={{ width: "100%" }}>
          <Input size="large" defaultValue="How to play chess?" />
          <Button
            size="large"
            type="primary"
            onClick={() => search()}
          >
            Search
          </Button>
        </Space.Compact>
        {videos.map((videoId) => (
          <div key={videoId}>{videoId}</div>
        ))}
      </>
    );
}