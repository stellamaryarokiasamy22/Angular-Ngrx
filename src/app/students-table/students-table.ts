import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState, selectAll } from '../state/students-selectors';
import { Observable } from 'rxjs';
import { StudentsRecords } from '../state/students-records';
import { callStudentsRecordsApi } from '../state/students-records-action';

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './students-table.html',
  styleUrls: ['./students-table.scss'],
})
export class StudentsTable implements OnInit {
  dataSource$!: Observable<ReadonlyArray<StudentsRecords>>;
  columnsToDisplay: string[] = [
    'name',
    'city',
    'country',
    // 'subject' removed — template defines 'subjects' (plural)
    'passportDeclaration',
    'fitnessDeclaration',
    'courseName',
    'date',
    'state',
    'subjects',
    'street',
    'email',
    'phone',
    'postalCode',
  ];

  constructor(private store: Store<AppState>) {
    this.dataSource$ = this.store.select(selectAll);
    this.store.dispatch(callStudentsRecordsApi());
  }

  ngOnInit(): void {}
}
