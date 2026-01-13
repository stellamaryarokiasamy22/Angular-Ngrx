import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRecords } from "../state/students-records";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { initState } from '../state/students.reducer';

@Injectable({
    providedIn: 'root'
})
export class StudentRecordsService {
    constructor(private http: HttpClient) {}

    // Temporary implementation: return initial state as an observable.
    // Replace with an HTTP call (e.g. `return this.http.get<StudentsRecords[]>('/api/students')`)
        getStudentsRecords(): Observable<ReadonlyArray<StudentsRecords>> {
            // Prefer direct mock-server URL so we get JSON even when the dev-server proxy is not active.
            const url = 'http://localhost:3000/api/studentsRecords';
            console.debug('[StudentRecordsService] GET', url);
            return this.http.get<ReadonlyArray<StudentsRecords>>(url).pipe(
                catchError((err) => {
                    console.warn('[StudentRecordsService] request failed, falling back to initState', err && err.message ? err.message : err);
                    return of(initState);
                })
            );
        }
}