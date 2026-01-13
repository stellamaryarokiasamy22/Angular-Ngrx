import { StudentsRecords } from "./students-records";
import { createReducer, on } from "@ngrx/store";
import { callStudentsRecordsApiSuccess } from './students-records-action';

export const initState: ReadonlyArray<StudentsRecords> = [{
     name : "Stella",
    city : "Bangalore",
    country: "India",
    subject : "Karnataka",
    passportDeclaration : "Yes",
    fitnessDeclaration : "Yes",
    courseName : "Match",
    date : "14-06-2024",
    state : "Karnataka",
    subjects : "Maths",
    street : "Silk Borad",
    email : "stella@example.com",
    phone : "9876543210",
    postalCode : "123456"
}];


export const studentsReducer = createReducer(
    initState,
    on(callStudentsRecordsApiSuccess, (_state, { payload }) => payload)
);

