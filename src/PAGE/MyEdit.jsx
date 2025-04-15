import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const MyEdit = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  
  useEffect(() => {
    const loadData = async () => {
      try {
        let api = `http://localhost:3000/employee/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    loadData();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMydata((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      let api = `http://localhost:3000/employee/${id}`;
      await axios.put(api, mydata);
      toast.success("Data successfully Updated!", {
        position: "top-left"
      });
    } catch (error) {
      toast.error("Failed to update data!");
      console.error("Update error", error);
    }
  };

  return (
    <>
      <h1>Edit Employee Data {id}</h1>
      <label>Edit Employee No:</label>
      <input type="text" name="empno" value={mydata.empno || ""} onChange={handleInput} />
      <br />
      <label>Edit Name:</label>
      <input type="text" name="name" value={mydata.name || ""} onChange={handleInput} />
      <br />
      <label>Edit Designation:</label>
      <input type="text" name="designation" value={mydata.designation || ""} onChange={handleInput} />
      <br />
      <label>Edit Salary:</label>
      <input type="text" name="salary" value={mydata.salary || ""} onChange={handleInput} />
      <br />
      <button onClick={handleSubmit}>Edit Save!</button>
      <ToastContainer />
    </>
  );
};

export default MyEdit;
