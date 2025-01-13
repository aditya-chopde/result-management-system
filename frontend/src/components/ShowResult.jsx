import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ShowResult = () => {
  const { id } = useParams();
  const studentId = localStorage.getItem("studentId");
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const school = data.school;
  const subjects = data.subject;
  const student = data.student;

  useEffect(() => {
    if (studentId != id) {
      navigate("/s/result");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[1000px] my-5">
          <p>
            <span className="font-bold">School Name:</span> {school.schoolName}
          </p>
          <p>
            <span className="font-bold">Student Name:</span>{" "}
            {student.studentName}
          </p>
          <p>
            <span className="font-bold">Roll Number:</span>{" "}
            {student.studentRollNumber}
          </p>
        </div>
        <div className="w-[1000px]">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="border-all">Subject Name</th>
                <th className="border-all">Total Marks</th>
                <th className="border-all">Marks Scored</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((item) => (
                <tr key={item._id}>
                  <td className="border-all">{item.subjectName}</td>
                  <td className="border-all">{item.subjectTotalMarks}</td>
                  <td className="border-all">{item.marksScored}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowResult;