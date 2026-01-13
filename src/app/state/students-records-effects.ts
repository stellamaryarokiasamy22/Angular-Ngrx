import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { callStudentsRecordsApi, callStudentsRecordsApiSuccess } from './students-records-action';
import { StudentRecordsService } from '../services/students-records.service';
import { Observable } from 'rxjs';

@Injectable()
export class studentsRecordsEffects {
  // declare property; assign in constructor to ensure injected services are available
  loadStudentsRecords$!: Observable<any>;

  constructor(private actions$: Actions, private studentsRecordsService: StudentRecordsService) {
    this.loadStudentsRecords$ = createEffect(() =>
      this.actions$.pipe(
        ofType(callStudentsRecordsApi),
        tap(() => console.debug('[Effects] callStudentsRecordsApi received')),
        exhaustMap(() =>
          this.studentsRecordsService.getStudentsRecords().pipe(
            tap((res) => console.debug('[Effects] service returned', res && res.length ? `items=${res.length}` : res)),
            map((studentsRecords) => callStudentsRecordsApiSuccess({ payload: studentsRecords })),
            catchError((err) => {
              console.error('[Effects] error while loading students', err);
              return EMPTY;
            })
          )
        )
      )
    );
  }
}
