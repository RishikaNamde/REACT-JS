import { useState } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const Insert=()=>{

  const [input,setInput]= useState({})
      const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setInput(values=>({...values, [name]:value}));
          console.log(input);
        }

        const handleSubmit=async()=>{
          
                  let api="http://localhost:3000/employee";
                  const response = await axios.post(api, input);
                  console.log(response);
                  toast.success("Data Successfully Inserted")
                }

    return(
        <>
        <div style={{margin:"100px" , width:"400px"}}>

        <h1>Insert Page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Number</Form.Label>
        <Form.Control type="text" name="empno" onChange={handleInput}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name="designation"  onChange={handleInput}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text"  name="salary" onChange={handleInput}/>
        
      </Form.Group>

      
     
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit 
      </Button>
    </Form>
    </div>
<ToastContainer/>
        </>
    )
}
export default Insert;