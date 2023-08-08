
import { useLocation, useNavigate } from "react-router-dom"
import CreatorContent from "../components/CreatorContent";

function ViewCreator(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const creator = state.creator;
    console.log(creator);

    function onHomeClick(){
        navigate('/')
    }

    return(
        <div>
            <CreatorContent creator={creator}/>
            <button onClick={onHomeClick}>home</button>
        </div>
    )
}
export default ViewCreator