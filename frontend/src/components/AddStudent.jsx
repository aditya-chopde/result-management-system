import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddStudent = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (token != id) {
      navigate("/login");
    }
  }, []);
  return <div className="text-center">Add Student</div>;
};

export default AddStudent;
