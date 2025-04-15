import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';

const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/employee";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[]);
    const myDel=async(id)=>{
     let api=`http://localhost:3000/employee/${id}`;
     const response=await axios.delete(api);
     toast.error("Data Successfully Deleted")
     loadData();

    }
    let sno=0;
   const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>
                <RiDeleteBin5Fill className="DelIcon" onClick={() => myDel(key.id)}
                />
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Update page</h1>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Emp no</th>
          <th>Emp Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      <ToastContainer/>
        </>
    )
}
export default Update;