import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";

const EditStudent = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [data, setData] = useState([])

  const handleGetSingleStudent = async () => {
    await api.get(`/create/get-single-student/${id}`).then((res)=>{
        const data = res.data.getSingleStudent
        setName(data[0].studentName)
        setRollNumber(data[0].studentRollNumber)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      studentName: name,
      studentRollNumber: rollNumber,
    };

    await api.post(`/create/edit-student/${id}`, formData).then((res) => {
      alert(res.data.message);
      navigate(`/dashboard/${token}`);
    });
  };

  useEffect(() => {
    handleGetSingleStudent()
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="border rounded-lg border-black px-8 py-5 w-[400px]">
          <h1 className="font-bold text-xl py-3">Edit Student Details</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Enter Name: </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                className="input-register-school"
              />
            </div>
            <div>
              <label htmlFor="">Enter Roll Number: </label>
              <br />
              <input
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                type="text"
                placeholder="Enter roll number"
                className="input-register-school"
              />
            </div>
            <div>
              <button className="w-full my-3 py-2 text-white bg-blue-600 rounded-md">
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
