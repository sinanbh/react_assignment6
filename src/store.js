import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./components/studentData";

export default configureStore({
    reducer: {
        students: studentsReducer,
    },
});