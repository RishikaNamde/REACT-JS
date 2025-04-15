import { useContext} from "react";
import { myContext } from "./App";
const Comp5=()=>{
    const {user,setUser}=useContext(myContext);
    return(
        <>
        <h1>Component-5</h1>
        <h1>Welcome.{user}....</h1>
        <button onClick={()=>{setUser("Rishika")}}>Click me</button>
        </>
    )
}
export default Comp5;