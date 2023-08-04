import Header from "../components/header/Header";
import Favorites from "./Favorites";
import Search from "./Search";

export default function Main(){
    return <>
    <Header/>
    <div className='main'>
    {/* <Favorites/> */}
    <Search/>
    </div>
    </>
}