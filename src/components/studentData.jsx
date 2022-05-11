import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: '1' },
    { name: 'Doe', age: 23, course: 'MERN', batch: 'November', id: '2' },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: '3' },
    { name: 'Dave', age: 20, course: 'MERN', batch: 'September', id: '4' },
    { name: 'Chris', age: 21, course: 'MERN', batch: 'October', id: '5' },
    { name: 'James', age: 20, course: 'MERN', batch: 'November', id: '6' },
    { name: 'Ryan', age: 24, course: 'MERN', batch: 'October', id: '7' },
];

const StudentData = createSlice({

    name: "students",
    initialState,
    reducers: {
        addStudent(state, action) {
            state.push(action.payload);
        },
        updateStudent(state, action) {
            const { name, age, course, batch, id } = action.payload;
            const existingStudent = state.find((student) => student.id === id)
            if (existingStudent) {
                existingStudent.name = name
                existingStudent.age = age
                existingStudent.course = course
                existingStudent.batch = batch
            }
        },
    }
})

export const { addStudent, updateStudent } = StudentData.actions;

export default StudentData.reducer;