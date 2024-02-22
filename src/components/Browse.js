import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Browse = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
   
        return(
            <div>
                <Header/>
            </div>
        )
    
    
}
export default Browse;