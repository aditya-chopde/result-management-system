import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";

const SeeResult = () => {
  const [schoolName, setSchoolName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentRollNumber, setStudentRollNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      schoolName,
      studentName,
      studentRollNumber,
    };

    await api.post("/result/watch", formData).then((res) => {
      if(res.data.success){
        localStorage.setItem("studentId", res.data.studentId)
        navigate(`/s/result/${res.data.studentId}`, {state: res.data});
      }else{
        alert(res.data.message)
      }
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="w-[400px] border border-black px-8 py-5 rounded-lg">
          <div>
            <h1 className="font-bold text-xl text-center my-2">See Result</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Enter School Name</label>
                <br />
                <input
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                  className="input-register-school"
                />
              </div>
              <div>
                <label htmlFor="">Enter Your Name: </label>
                <br />
                <input
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                  className="input-register-school"
                />
              </div>
              <div>
                <label htmlFor="">Enter Roll Number: </label>
                <br />
                <input
                  value={studentRollNumber}
                  onChange={(e) => setStudentRollNumber(e.target.value)}
                  type="text"
                  placeholder="Enter roll number"
                  className="input-register-school"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full my-2 py-2 text-white bg-blue-500 rounded-md"
                >
                  See Result
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeResult;
