import Header from "../components/header/Header";
import Favorites from "./Favorites";

export default function Main(){
    return <>
    <Header/>
    <div className='main'>
    <Favorites/>
    </div>
    </>
}