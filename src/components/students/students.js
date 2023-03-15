import React, { useEffect } from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./studentItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateStudent } from "../../redux/features/sudentsSlice"; //new
import { useDispatch } from "react-redux";                        //new


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  
 const dispatch=useDispatch()
  const classes = useStyles();
  const students = useSelector((state) => state.student.students);
  useEffect(()=>{
    const timer = setTimeout(() => {
      dispatch(updateStudent)
     }, 5000);                                        //newcode
     
    return () => clearTimeout(timer);

  },[])
  

  return (
    <>
      <Grid spacing={2} container>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Students;
