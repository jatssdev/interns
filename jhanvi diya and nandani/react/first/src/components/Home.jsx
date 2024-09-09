import { FaUser } from "react-icons/fa6";
import Intro from "./Intro";
function Home() {
    return (

        <>
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