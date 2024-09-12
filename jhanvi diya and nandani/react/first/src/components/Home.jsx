import { FaUser } from "react-icons/fa6";
import Intro from "./Intro";
import MyImage from '../images/ywjlpt9a.bmp'
import MyImage2 from '../images/img.bmp'
function Home() {
    return (

        <>
            <img src={MyImage} alt="" />
            <img src={MyImage2} alt="" />
            <h1>Home Page</h1>
            <h3>USer : <FaUser /></h3>
            <hr />


            <Intro msg='hello' name='diya' />
            <Intro msg='hii' name='JAtin' />
            <Intro msg='how are you?' name='magan' />
        </>
    )
}


export default Home