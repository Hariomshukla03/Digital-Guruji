import About from "./About";
import Chatbot from "./Chatbot";
import Consil from "./Consil";
import Facebook from "./Facebook";
import Motivation from "./Motivation";
import Game from "./Game";
const Main=()=>{
    return(
        <div >
            <Motivation/>
            <Consil/>
            <Facebook/>
            <Chatbot/>
            <Game/>
            <About/> 
        </div>
    )
}
export default Main;