import React from "react";
import { useState } from "react";
import { svgs } from "../assets/asserts";
import { useParams } from "react-router-dom";
import api from "../config/api";

const AddResult = () => {
  const [toggleModal, setToggleModal] = useState(true);
  const {id} = useParams();
  const [subjectName, setSubjectName] = useState("")
  const [subjectTotalMarks, setSubjectTotalMarks] = useState("")
  const [marksScored, setMarksScored] = useState("")

  const handleSubmit = async (e)=>{
    setToggleModal(!toggleModal)
    e.preventDefault()

    const formData = {
        subjectName,
        subjectTotalMarks,
        marksScored,
        resultOf: id
    }

    await api.post("/result/create", formData).then((res)=>{
        alert(res.data.message)
        setSubjectName("")
        setSubjectTotalMarks("")
        setMarksScored("")
    }).catch((err)=>{
        alert("Error Occurred: "+err.message)
    })
  }
  return (
    <>
      <div className="relative">
        <div className="text-center">
          <button onClick={() => setToggleModal(!toggleModal)} className="bg-blue-500 hover:bg-blue-400 px-5 py-2 text-white rounded-lg">
            Add Marks
          </button>
        </div>

        <div
          className={`absolute right-[550px] top-[75px] ${
            toggleModal && "hidden"
          }`}
        >
          <div className="border bg-white rounded-e-md border-black px-8 py-5 w-[400px]">
            <div onClick={() => setToggleModal(!toggleModal)}>
              <img
                src={svgs.close_btn}
                alt="close-btn"
                className="absolute right-5 w-8 cursor-pointer"
              />
            </div>
            <h1 className="font-bold text-xl py-2 text-center mt-5">
              Enter Subject & Marks
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Enter Subject Name: </label>
                <br />
                <input
                value={subjectName}
                onChange={(e)=> setSubjectName(e.target.value)}
                  type="text"
                  placeholder="Enter subject name"
                  className="input-register-school"
                />
              </div>
              <div>
                <label htmlFor="">Enter Total Subject Marks: </label>
                <br />
                <input
                value={subjectTotalMarks}
                onChange={(e) => setSubjectTotalMarks(e.target.value)}
                  type="text"
                  placeholder="Enter marks"
                  className="input-register-school"
                />
              </div>
              <div>
                <label htmlFor="">Enter Marks Scored: </label>
                <br />
                <input
                value={marksScored}
                onChange={(e) => setMarksScored(e.target.value)}
                  type="text"
                  placeholder="Eneter marks scored"
                  className="input-register-school"
                />
              </div>
              <div>
                <button type="submit" className="bg-blue-500 text-white rounded-md w-full py-2 my-3">
                  Add Marks
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddResult;
