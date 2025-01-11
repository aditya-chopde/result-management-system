import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { svgs } from "../assets/asserts";
import api from "../config/api";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const schoolId = localStorage.getItem("schoolId");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getAllStudents = async () => {
    await api.get(`/create/students/all/${schoolId}`).then((res) => {
      const data = res.data.students;
      setData(data);
    });
  };

  const handleDeleteStudent = async (id) => {
    await api.post(`/create/student/delete/${id}`).then((res) => {
      alert(res.data.message);
      getAllStudents();
    });
  };

  useEffect(() => {
    if (token != id) {
      navigate("/login");
    }

    getAllStudents();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[1000px]">
        <div>
          <button
            className="transition-all bg-blue-600 text-white px-5 py-2 rounded-md flex flex-row justify-center items-center gap-3 hover:bg-blue-500"
            onClick={() => navigate(`/add/student/${token}`)}
          >
            <img src={svgs.plus} alt="plus-icon" className="invert w-5" />
            Add Student
          </button>
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
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td className="border-all">{item.studentName}</td>
                    <td className="border-all">{item.studentRollNumber}</td>
                    <td className="border-all gap-3 realtive">
                      <button className="px-3 transition-all hover:bg-blue-400 bg-blue-500 text-white my-2 mr-2" 
                      onClick={()=> navigate(`/add/result/${item._id}`)}>
                        Add Result
                      </button>
                      <button
                        className="px-3 bg-yellow-500 text-white my-2 mr-2 transition-all hover:bg-yellow-400"
                        onClick={() => navigate(`/edit/student/${item._id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 transition-all hover:bg-red-400 bg-red-500 text-white my-2 mr-2"
                        onClick={() => handleDeleteStudent(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
