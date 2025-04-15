// import {Link,Outlet} from "react-router-dom";
// const Layout=()=>{
//     return(
//         <>
//       <Link to="home">Home |</Link>
//       <Link to="insert"> Insert|</Link>
//       <Link to="display"> Display</Link>
//       <hr />
//       <Outlet/>
//       <hr />
//       www.mycompany.com
//         </>
//     )
// }
// export default Layout;

import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from "./components/TopNav";
import TopBanner from "./components/TopBanner";
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';



const Layout=()=>{
    return(
        < >
        <Topnav/>
        <TopBanner/>
        <Outlet/>
        <Footer/>
       </>
    )
}
export default Layout;

