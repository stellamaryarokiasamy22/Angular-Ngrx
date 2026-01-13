import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-records";
export const actionList = {
    callStudentsRecordsApi : "[ Students Table Component] Call Students Records Api",
    callStudentsRecordsApiSuccess : "[ Students Table Component ] Call Students Records Api Success",
}

export const callStudentsRecordsApi = createAction(
    actionList.callStudentsRecordsApi
);

export const callStudentsRecordsApiSuccess = createAction(
    actionList.callStudentsRecordsApiSuccess,
    props<{ payload: ReadonlyArray<StudentsRecords> }>()
);