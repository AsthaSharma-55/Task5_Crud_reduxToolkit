import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/sudentsSlice";

export default configureStore({
  reducer: {
    student: StudentReducer,
  },
});
