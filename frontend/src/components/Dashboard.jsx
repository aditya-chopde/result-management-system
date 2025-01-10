import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { svgs } from "../assets/asserts";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (token != id) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[1000px]">
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md flex flex-row justify-center items-center gap-3 hover:bg-blue-500" onClick={()=> navigate(`/add/student/${token}`)}>
            <img src={svgs.plus} alt="plus-icon" className="invert w-5"/>Add Student</button>
        </div>
        <div className="my-10">
          <h1 className="text-lg">Added Students</h1>
          <div className="my-2">
            <table className="w-full">
              <thead>
                <tr>
                  <td className="border-all font-bold">Name</td>
                  <td className="border-all font-bold">Roll Number</td>
                  <td className="border-all font-bold">Actions</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
