import axios from "axios";
import { useState,useEffect } from "react";
import './Display.css';

const Display=()=>{
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
    const ans= mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    }
)
return(
    <>
    <h1>Display Page</h1>
    <table border={"1px solid black"} >
        <tr>
            <th > Emp no</th>
            <th>name</th>
            <th> Designation</th>
            <th> Salary</th>
        </tr>
        {ans}
    </table>
    </>
)
}
export default Display;