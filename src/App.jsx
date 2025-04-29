// const name="Rishika"
// const age=21
// const salary=45000
// const App=()=>{
//   return(
//     <p>welcome to react i am {name} my age is {age} my salary is {salary}</p>   //expression in jsx{}
//   )

// const { useReducer } = require("react");

 
// }
// export default App;



//==================================prgmm-2======================================


// const subject=<ul>
//   <li>php</li>
//   <li>asp</li>
//   <li>dsa</li>
//   <li>sql</li>0
//   <li>java</li>
// </ul>
// const App=()=>{
//   return(
//     <h1>My subject:- {subject}</h1>
//   )
// }
//  export default App;


 //==================================prgmm:-3==========================================

//  const  App=()=>{
//   return(
//     <>
//     <h1>The empty bracket </h1>
//     <h1>is called fragment</h1>
//     </>
//   )
//  }
//  export default App;

//================================PRGMM=4==========================================

//  const  App=()=>{
//   return(
//     <>
//     Enter name:<input type="text"/>
//     <br/>
//     <br/>
//     Enter city:<input type="text"/>
//     </>
//   )
//  }
//  export default App;



//=======================================PRGMM=5===========================================================
//===================FUNCTION IS CALLED COMPONENT=========ITS FIRST LETTER SHOULD BE CAPITAL=============



// import Cybrom from "./Cybrom";
// const App =()=>{
//     return(
//       <>
//      <h1> hello guys</h1>
//      <Cybrom/>
//       </>
//     )
//    }
//    export default App;

// =================================progmm-6==============================


// import Header from './Header';
// import Data from './Data';
// import Footer from './Footer';
// const App =()=>{
//     return(
//       <>
//      <h1> hello guys</h1>
//     <Header/>
//     <Data/>
//     <Footer/>
//       </>
//     )
//    }
//    export default App;

//=====================================prgmm-7=======================================
//====================================PROPS=========================================
// import Student from "./Student";
// const App=()=>{
//     return(
//         <>
//         <h1 align="center">Welcome to cybrom</h1>
//         <Student nm="rishika" city="Bhopal" subject="react js"/>
//         </>
//     )
// }
// export default App;

//========================================PRGMM-8=====================================================

// import College from "./College";
// const name="LNCT";
// const seats=45;
// const fees=60000;
// const App=()=>{
//     return(
//         <>
//         <h1 align="center">Welcome to cybrom</h1>
//         <College clgname={name} seat={seats} fs={fees}/>
//         </>
//     )
// }
// export default App;

//========================================PRGMM-9======================================
// import Cybrom from "./Cybrom";
// const College={
//     name:"Lnct",
//     fees:45000,
//     city:"bhopal",
//     subject:"java"
// }
//     const App=()=>{
//         return(
//             <>
//             <h1>Welcome to cybrom</h1>
//             <Cybrom
//             nm={College.name}
//             fs={College.fees}
//             ct={College.city}
//             sub={College.subject}
//             />
//             </>
//         )

//     }

// export default App;




// ======================================prgmm-10=======================================================


// const App=()=>{
//     const Student =["deepak","rishika","rishi"];
//     const ans=Student.map((key)=>{
//         return(
//            <>
                  
//              {/* <h1>{key}</h1> */}
//             <option>{key}</option>
//             {/* <li>{key}</li> */}
            
//             </>
//         )
//     });
//     return(
//         <>
//         <h1 align="center">welcome to cybrom</h1>
// <hr/>
//         {/* {ans} */}
//                 <select>{ans}</select>
//                 {/* <ul>{ans}</ul> */}

//         </>
//     )
// }
// export default App;




//=========================================prgmm-ARRAY OF OBJECT USING MAP======================================================

//  const table=()=>{

//      const Record=[
//       {
//          name:"shivani",
//          number:1234567654,
//          email:'abcdgmail.com',
//          pass:123456
//       },
//       {
//         name:"prinshu",
//         number:1234567654,
//         email:'bcdgmail.com',
//         pass:123457
//      },
//      {
//       name:"ruchi",
//       number:1234567654,
//       email:'dabcdgmail.com',
//       pass:123458
//    },
//    {
//     name:"rani",
//     number:1234567654,
//     email:'gabcdgmail.com',
//     pass:123459
//   }
  
//   ]
// const ans=Record.map((key)=>{
//       return(
//         <>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.number}</td>
//           <td>{key.email}</td>
//           <td>{key.pass}</td>
//         </tr>
//         </>
//       )
//     })
//     return(
//       <> 
//            <h1>Welcome To react classes!! this our work time!!!</h1>
//             <hr />
//           <table border="1" width="400">
//             <tr>
//                 <th>Name</th>
//                 <th>Number</th>
//                 <th>Email</th>
//                  <th>Password</th>
//             </tr>
//                {ans}
//           </table>
  
//       </>
//     )
// }
// export default table;


//========================================EMPLOYEE DATA uSING MAP METHOD================================
// import EmpData  from "./Employee";
// import EmpDesign  from "./EmpDesign";
// const App=()=>{
//     const ans=EmpData.map((key)=><EmpDesign
//     eno={key.empno}
//     nm={key.name}
//     desig={key.designation}
//     sal={key.salary}
//     />);
//     return(
//         <>
//         <h1>Welocome!!!!</h1>
//         <table border="1">
//             <tr>
//                 <th>Emp No</th>
//                 <th>Name</th>
//                 <th>Designation</th>
//                 <th>Salary</th>
//             </tr>
            
//                 {ans}
            
//         </table>
//         </>
//     )
// }
// export default App;

//=================================================React Router=======================================================
// import{BrowserRouter,Routes,Route} from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route path="home" element={<Home/>}/>
//             <Route path="about" element={<About/>}/>
//             <Route path="contact" element={<Contact/>}/>
//             <Route path="*" element={<NotFound/>}/>

//             </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App;
//============================================INLINE CSS IN REACT=============================================================

// const App=()=>{
//     return(
//         // <h1 style={{color:"green" , fontFamily:"cursive", textDecoration:"underline"}}>Welcome to Cybrom Classes</h1>
//         <>
//         <div style={{border:"3px solid blue",width:"200px",height:"200px",padding:"20px" , borderRadius:"20px",margin:"auto",backgroundColor:"yellow" , color:"black",lineHeight:"8" ,fontSize:"25px",textAlign:"center"}}>
//             CYBROM
//         </div>
//         </>
//     )
// }
// export default App;

//==============================================TASK==========================================================

// const App=()=>{
//     return(
//         <>
//  <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "200px",
//           borderRadius:"7px"
//       }}
//     >
//       <div
//         style={{
//           width: "200px",
//           height: "100px",
//           backgroundColor: "blue",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           borderRadius:"7px"
//         }}
//       >
//         <div
//           style={{
//             width: "150px",
//             height: "75px",
//             backgroundColor: "yellow",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//               borderRadius:"7px"
//           }}
//         >
//           <div
//             style={{
//               width: "100px",
//               height: "50px",
//               backgroundColor: "red",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "black",
//               fontWeight: "bold",
//               borderRadius:"7px"
//             }}
//           >
//             CYBROM
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default App;


//=============================================================================
// const data={
//     color:"red",
//     textDecoration:"overline",
// }
// const App=()=>{
//     return(
//         <>
//          <h1 style={data}>HELLO GUYS !!!!How are you all </h1>
//          </>
       
//     )
// }
// export default App;

//====================================HOW TO ADD IMAGE,SLIDERS,CARDS,NAVBAR USING BOOTSTRAP=====================================
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import myimg from "./images/download.jpeg"
// // import myimg1 from "./images/mountain.jpeg"
// // import myimg2 from "./images/tree.jpeg"
// import Carousel from 'react-bootstrap/Carousel';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



// import c1 from "./images/nightview.jpg";
// import c2 from "./images/Taj.jpeg";
// import c3 from "./images/tajnight.jpg";
// import c4 from "./images/taj mahal.jpg";




// const App=()=>{
//     return(
//         <>
//          <h1>welcome to react</h1>
//          {/* <img src={myimg} width="300" height="300" />
//           <img src={myimg1} width="300" height="300" />
//           <img src={myimg2} width="300" height="300" /> */}
          
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Carousel>
//       <Carousel.Item>
//     <img src={c1} width="2000" height="400" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={c4} width="2000" height="400"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={c3} width="2000" height="400" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
// <div id="myclass">
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={c1} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={c2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={c3} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={c4} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//           </>
       
//     )
// }
// export default App;   


//===============================================PET WEBSITE=========================================================
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// import Carousel from 'react-bootstrap/Carousel';

// import slide1 from "./images/slide-1.jpg";
// import slide2 from "./images/slide-2.jpg";
// import slide3 from "./images/slide-3.jpg";

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import banner1 from "./images/banner-1.jpg";
// import banner2 from "./images/banner-2.jpg";


// import product1 from "./images/product1.jpg";
// import product2 from "./images/product2.jpg";
// import product3 from "./images/product3.jpg";
// import product4 from "./images/product4.jpg";

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const App=()=>{
//     return(
//         <>
//         <div id="pet">
//          <Navbar expand="lg" className="custom-navbar">
//       <Container fluid>
//         <Navbar.Brand href="#" className='pet-store'>PET STORE</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Shop</Nav.Link>
//             <NavDropdown title="Categories" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Browse by Categories</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//               Special Offer
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 New Arrivals
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
           
//             </Nav.Link>
//           </Nav>
//           <Form className="search-bar">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//     <div id="pet-carousel">
//     <Carousel fade>
//       <Carousel.Item>
//       <img src={slide2} />
//       <Carousel.Caption className="custom-caption">
        
//         <h3>Welcome to Pet World</h3>
//         <p>Find the best products for your pets.</p>
//         <p>Love, Care, and Happiness for your furry friends!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={slide1} />
//       <Carousel.Caption className="custom-caption">
//         <h3>Healthy & Happy Pets</h3>
//         <p>Discover top-quality pet food and accessories.</p>
//         <p>Because they deserve the best!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={slide3} />
//       <Carousel.Caption className="custom-caption">
//         <h3>Adopt & Give Love</h3>
//         <p>Find a new best friend waiting for you.</p>
//         <p>Adopt a pet and change a life!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>

//     <h1>Featured Product</h1>
//     <div className="product-cards">
//   <Card className="custom-card">
//     <Card.Img variant="top" src={product1} />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk of the card's content.
//       </Card.Text>
//       <Button className="custom-btn">Go somewhere</Button>
//     </Card.Body>
//   </Card>

//   <Card className="custom-card">
//     <Card.Img variant="top" src={product2} />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk of the card's content.
//       </Card.Text>
//       <Button className="custom-btn">Go somewhere</Button>
//     </Card.Body>
//   </Card>

//   <Card className="custom-card">
//     <Card.Img variant="top" src={product3} />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk of the card's content.
//       </Card.Text>
//       <Button className="custom-btn">Go somewhere</Button>
//     </Card.Body>
//   </Card>

//   <Card className="custom-card">
//     <Card.Img variant="top" src={product4} />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk of the card's content.
//       </Card.Text>
//       <Button className="custom-btn">Go somewhere</Button>
//     </Card.Body>
//   </Card>
// </div>


//     <div id="cards" className="custom-cards">
//   <CardGroup>
//     <Card className="custom-card">

//         <Card.Img variant="top" src={banner1} />
//         <Card.Body>
//           <Card.Title>New Premimum Cat Treats</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src={banner2} />
//         <Card.Body>
//           <Card.Title>Bravecto Treatment 1kg</Card.Title>
//           <Card.Text>
//             This card has supporting text below as a natural lead-in to
//             additional content.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src={banner1} />
//         <Card.Body>
//           <Card.Title>Hot Sales</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This card has even longer content than the
//             first to show that equal height action.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//     </CardGroup>
//     </div>
    
//     <footer className="custom-footer">
//   <Container>
//     <Row>
//       <Col md={4} className="footer-section">
//         <h5>About Us</h5>
//         <p>We provide the best products and services for your pets.</p>
//       </Col>
//       <Col md={4} className="footer-section">
//         <h5>Quick Links</h5>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Shop</a></li>
//           <li><a href="#">Adopt a Pet</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </Col>
//       <Col md={4} className="footer-section">
//         <h5>Contact</h5>
//         <p>Email: support@petstore.com</p>
//         <p>Phone: +123 456 7890</p>
//       </Col>
//     </Row>
//     <div className="footer-bottom">
//       <p>&copy; 2025 Pet Store. All Rights Reserved.</p>
//     </div>
//   </Container>
// </footer>
//  </>
//     )
// }
// export default App;

//=============================================EVENT USING REACT========================================================

// const App=()=>{
    // const display=()=>{
    //     alert("are you sure you want to delete!!!")
    // }
    // return(
    //     <>
    //     <h1 align="center">welcome guys </h1>
    //     <button onClick={display}>Click here</button>
    //     </>
    // )

//     const Myname=(nm)=>{
//         alert(`hello my name is ${nm}`)
//     }
//     return(
//         <>
//         <h1>what is your name</h1>
//         <button onClick={()=>{Myname("rishika")}}>Click me </button>
//         </>
//     )
//=======================================EVENT OBJECT ============================================
// const display=(e)=>{
// //    alert(e.type);
//    alert( "Type:" + e.type+" Name:"+ e.target.name+"Value:" + e.target.value);
   
// }
// const myshow=(e)=>{
//     console.log(e)
//     console.log(e.target.name);
//     console.log(e.target.value);

// }
// return(
//     <>
//     <h1>Welcome to React </h1>
//     Enter Name <input  value="rishika"type="text" onClick={myshow}/>
    {/* <button name="btn1" value="myBtn" onClick={display}>click here</button> */}
// import { useEffect } from "react";
//     </>
// )
// }


// const display=(nm,e)=>{
// alert("Name:" + nm + " btnName:"+e.target.name+"Value:"+ e.target.value);
// }
// return(
//     <>
//     <button name="myBTN " value="  btn" onClick={(e)=>{display("rishika",e)}}>click here</button>
//     </>
// )
//  }
// export default App;

//====================================================================================================
// const App=()=>{
//     return(
//         <>
//           <h1>Application Form</h1>
//           Enter name:<input type="text"></input> <br /> <br />
//           Enter Mobileno:<input type="number"></input>
//           </>  
//     )
// }
// export default App;


//============================================USESTATE[07/04/2025]===========================

// import { useState } from "react";
// const App=()=>{
//     const [name,setName]=useState(" Rishi");
//     return(
//         <>
//         <h1>Welcome to my app{name}</h1>
//         <button onClick={()=>{setName(" Deepak")}}>click here</button>
//         </>

//     )
// }
// export default App;

//'...................................color changer...............................................

// import { useState } from "react";
// const App=()=>{
//     const [color,setColor]=useState("red");
//     return(
//         <>
//         <h1 style={{color:color}}>My Favourite color:{color}</h1>
//         <button onClick={()=>{setColor("green")}}>green color</button>
//         <button onClick={()=>{setColor("pink")}}>pink color</button>
//         <button onClick={()=>{setColor("orange")}}>orange color</button>
//         <button onClick={()=>{setColor("blue")}}>blue color</button>

//         </>

//     )
// }
// export default App;

//........................................7/04/2025.....................................
// import { useState } from "react";
// import {Button} from "react-bootstrap";
// const App=()=>{
//     const [cnt,setCnt]=useState(0);
//     const mydec=()=>{
//         if(cnt<=0)
//         {
//             alert("not less than zero")
//         }
//         else{
//             setCnt(cnt-1)
//         }
//     }
//     return(
//         <>
//         <h1 align="center">My counter App</h1>
//         <div style={{border:"2px solid blue",padding:"20px",borderRadius:"30px",backgroundColor:"lightblue",width:"400px",margin:"auto"}}>
//             <h1>My count:{cnt}</h1>
//             <button onClick={()=>{setCnt(cnt+1)}}>Increment </button>
//             <button onClick={mydec}>Decrement</button>
//             <button onClick={()=>{setCnt(0)}}>Reset</button>
//         </div>
//         </>
        
//     )
        
    
// }
// export default App;
//....................................8/04/2025......................................
// import { useState, useEffect } from "react";

// const App=()=>{
//  const [count, setCount]= useState(0);
//  useEffect(()=>{
//   setTimeout(()=>{
//     setCount(count+1);
//   }),4000;
//   });
//   return(
//     <>
//     <h1 >React Example :{count}</h1>
   

  
//     </>
//   )
// }  
// export default App;
 //................................8/04/2025..................................................

//  import { useState,useEffect } from "react";
//  const App=()=>{
//     const [count,setcount]=useState(0);
//     const[multi,setMulti]=useState(0);
//     useEffect(()=>{
//         setMulti(count*2)
//     },[count])
//     return(
//         <>
        
//         <h1>my count:{count}</h1>
//         <h2>multiplication:{multi}</h2>
//         <button onClick={()=>{setcount(count+1)}}>click here</button>
//         </>
//     )
//  }
//    export default App;  

//..........................................8/04/2025..............................................
// import { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");

//   const handleSubmit = () => {
//     alert(`My name: ${name} City: ${city}`);
//   };

//   return (
//     <>
//       <h1>Application Form</h1>
//       name: <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       city: <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>save!!</button>
//     </>
//   );
// };

// export default App;


//........................................8/04/2025...........................

// import { useState } from "react";
// const App=()=>{
//     const [input,setInput]=useState({});
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}))
//         console.log(input);
//     }
//     return(
//         <>
//         <h1>Application Form</h1>
//         Rollno: <input type="text" name="roll no" onChange={handleInput} />
//         <br/>
//        City: <input type="text" name="city" onChange={handleInput} />
// <br/>
// Name: <input type="text" name="name" onChange={handleInput} />
// <br/>
// Fees: <input type="text" name="fees" onChange={handleInput} />
//  </>
//     )
// }
// export default App;
//.......................................8/04/2025.....................................

//json-server --watch db.json 

// import { useState } from "react";
// import axios from "axios";
// const App=()=>{
//     const [input,setInput]=useState({});
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}))
//         console.log(input);
//     }
//     const handleSubmit=async()=>{
//         let api="http://localhost:3000/data";
//         const response=await axios.post(api,input);
//         alert("data succesfully save!!!")
//     }
//     return(
//         <>
//         <h1>Application Form</h1>
//         Rollno: <input type="text" name="rollno" onChange={handleInput} />
//         <br/>
//        City: <input type="text" name="city" onChange={handleInput} />
// <br/>
// Name: <input type="text" name="name" onChange={handleInput} />
// <br/>
// Fees: <input type="text" name="fees" onChange={handleInput} />
// <button onClick={handleSubmit}>save!!</button>
//  </>
//     )
// }
// export default App;

//=========================DISPLAYING DATA(INSERT,DISPLAY ,DATA) ======================================
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import Insert from "./Insert";
// import Display from "./Display";
// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="home" element={<Home/>}/>
//             <Route path="insert" element={<Insert/>}/>  
//             <Route path="display" element={<Display/>}/>
//       </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App;

//........................................11/04/2025.......................

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./PAGE/Home";
// import Insert from "./PAGE/Insert";
// import Search from "./PAGE/Search";
// import Display from "./PAGE/Display";
// import Contact from "./PAGE/Contact";
// import Update from "./PAGE/Update";
// import MyEdit from "./PAGE/MyEdit";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="home" element={<Home />} />
//           <Route path="insert" element={<Insert />} />
//           <Route path="display" element={<Display />} />
//           <Route path="contact" element={<Contact />} /> {/* Ensure this is correct */}
//           <Route path="search" element={<Search />} />
//           <Route path="update" element={<Update/>}/>
//           <Route path="/myedit/:id" element={<MyEdit />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;


//.............................PROPS DRILL.............................nested 
// import Comp1 from "./comp1";
// import { useState,createContext } from "react";
// const myContext=createContext();
// const App=()=>{
//     const [user,setUser]=useState("Rishika");
//     return(
//         <>
//         <h1>welcome {user}</h1>
//        <button onClick={()=>{setUser("Reshu")}}>Click here</button>
//        <myContext.Provider value={{user,setUser}}>
//         <Comp1/>
        
//        </myContext.Provider>
//         </>
//     )
// }
// export default App;
// export {myContext}



//..................................................................................

//  import Cybrom from "./Cybrom";
//  const App=()=>{
//     return(
//     <>
//     <h1>welcome</h1>
//    <Cybrom>
//        we learn mern stack
//    </Cybrom>
//    </>
// )
//  }
//  export default App;

//................................................................................
// import Text from "./Text";
// const App=()=>{
//     return(
//     <>
//     <h1>Welcome</h1>
//     <Text/>
//     </>
//     )
// }
// export default App;

//==================================17-04-2025=======================================================
// import AuthApp from "./AuthApp";
// import UnAuthApp from "./UnAuthApp";
// import { useContext } from "react";
// import {myContext} from "./LoginContext";
// const App=()=>{
//     const {user}=useContext(myContext);
//     return(
//         <>
// <h1>Login System</h1>
// {user?.auth ? <AuthApp /> : <UnAuthApp />}
// </>
//     )
// }
// export default App;


//==============================================================================================
// import { useRef } from "react";
// const App=()=>{
//     const myRef = useRef("");
//     const myDisplay=()=>{
//         // myRef.current.style.border="3px solid red";
//         // myRef.current.style.width="200px";
//         // myRef.current.style.padding="30px";
//         // myRef.current.style.borderRadius="30px";
//         // myRef.current.style.backgroundColor="yellow";
//         myRef.current.innerHTML="we learn useref hook in react js";

//     }
//     return(
//         <>
//         <h1 ref={myRef}>Welcome to Cybrom</h1>
//         <button onClick={myDisplay}>Click here</button>
//         {/* <div ref={myRef}>
//             we are cybrom student
//         </div> */}
//         </>
//     )
// }
// export default App;


//========================================================================================

// import { useEffect } from "react";
// import { useState,useRef } from "react";
// const App=()=>{
//     const [name,setName]=useState("");
//         const myref=useRef(0);
//         useEffect(()=>{
//             myref.current+=1;
//         })
//         return(
//             <>
//             Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//             <h1>Rendring Count: {myref.current}</h1>
//             </>

//         )   
// }
// export default App;

//========================================================================
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\task\\\\\\\\\\\\\\\\\\\\\\\
// import { useRef } from "react";
// const App=()=>{
//       const myRef=useRef();
// const myDisplay=()=>{
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="20px";
    
    
    
// }
// const myDispla=()=>{
//     myRef.current.innerHTML="welcome to cybrom ";
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
    
// }

// const myDispl=()=>{
//     myRef.current.style.border="3px solid red";
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="50px";
    
// }
//         return(
//             <>
//             <div  ref={myRef}>
//             {/* <h1 >welcome!!!</h1> */}
//             </div>
//         <button onClick={myDisplay}>first</button>
//         <button onClick={myDispla}>second</button>
//         <button onClick={myDispl}>third</button>
       
//             </>
//         )
//     }
//     export default App;

//======================================  22/04/2025   ========================================================
//========================================USER-REDUCDER-HOOK=======================
// import { useReducer } from "react";

// const reducerMethod = (state, action) => {
//   switch (action) {
//     case "Increment":
//       return state + 1;
//     case "Decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [count, dispatch] = useReducer(reducerMethod, 0);

//   return (
//     <>
//       <h1>Welcome to React</h1>
//       <button onClick={() => dispatch("Increment")}>Increment</button>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch("Decrement")}>Decrement</button>
//     </>
//   );
// };

// export default App;
//=========================================================================


// import { useReducer } from "react";
// const App=()=>{
//     const myReducer=(state,action)=>{
//         switch(action)
//         {
//             case "RED":
//                 return state="RED";
//                 case "GREEN":
//                     return state="GREEN";
//                     case "BLUE":
//                     return state="";
//         }
//     }
// }

// USEDMEMO:==  is used to increase the performace of the FUNCTION
//expensive performnace jo render hone k liye bachaya jata hai

// import { useState, useMemo } from "react";
// const App=()=>{
//     const [add,setAdd]=useState(0);
//     const [sub,setSub]=useState(100);
//     const myMulti=useMemo(()=>{
//         console.log("******");
//         return add*2;
//     },[add]);
//     return(
//         <>
//         <h1>Welcome to USEDMEMO hook</h1>
//         <h1>Multiplication: {myMulti}</h1>
//         <button onClick={()=>{setAdd(add+1)}}>Increment</button>
//        <h3>Decrement:{add}</h3>
//        <button onClick={()=>{setSub(add+1)}}>Decrement</button>
//        <h3>Decrement:{sub}</h3>
//         </>
//     )

// }
// export default App;

//=================================REDUX TOOLKIT=========================================================
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//     const mydata=useSelector(state=>state.mycounter.count);
//     const dispatch = useDispatch();
//     return(
//         <>
//         <h1>welcome</h1>
//         <button onClick={()=>{dispatch(increment())}}>increment</button>
//         <h1>{mydata}</h1>
//         <button onClick={()=>{dispatch(decrement())}}>decrement</button>
//         </>
//     )
// }
// export default App;

//=====================================29/4/25=====================
import { useSelector ,useDispatch} from "react-redux";
import { changeName } from "./nameSlice";
const App=()=>{
    const usrname= useSelector(state=>state.myname.user)
    const dispatch=useDispatch();
    return(
        <>
        <h1>welcome :{usrname}</h1>
        <button onClick={()=>{dispatch(changeName())}}>change name</button>
        </>
    )
}
export default App;









