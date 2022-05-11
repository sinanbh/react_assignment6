import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "./studentData";
import '../App.css'

// const emptyObj = {
//     name: "",
//     age: "",
//     course: "",
//     batch: "",
//     id: "",
// };

const Edit = () => {
  
  const [details, setDetails] = React.useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.find((student) => student.id === id));

  React.useEffect(() => {
      if (id === students.id) {
        setDetails({
          name: students.name,
          age: students.age,
          course: students.course,
          batch: students.batch,
        });
      }
      else if (id === undefined) {
        setDetails({
          name: "",
          age: "",
          course: "",
          batch: "",
          id: "",
        });
      }  
  }, [students, id]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === undefined) {
      let newDetails = {
        ...details,
        id: Math.floor(Math.random() * 100000).toString(),
      };
      dispatch( addStudent( newDetails ));
    } 
    else {
      dispatch(
        updateStudent({
          id: id,
          name: details.name,
          age: details.age,
          course: details.course,
          batch: details.batch,
        })
      )
    }
    navigate("/students");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            id="name"
            name="name"
            className="input"
            value={details.name}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Age"
            type="number"
            id="age"
            name="age"
            className="input"
            value={details.age}
            onChange={handleChange}
          />
        </div>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Course"
            type="text"
            id="course"
            name="course"
            className="input"
            value={details.course}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Batch"
            type="text"
            id="batch"
            name="batch"
            className="input"
            value={details.batch}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          {
            <Link to="/students">
              <button className="cancel-btn">Cancel</button>
            </Link>
          }

          <button type="submit" className="submit-btn">
            Update
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Edit;
