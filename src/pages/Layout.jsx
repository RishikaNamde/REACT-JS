import {Link,Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home </Link>|
        <Link to="about"> About us</Link>|
        <Link to="contact"> Contact Us </Link>
     <hr size="4" color="red"/>
     <Outlet/>
     <hr size="4" color="purple" ></hr>
     www.mycompany.com all right reserved.
        </>
    )
}
export default Layout;