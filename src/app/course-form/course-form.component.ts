import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = new Course(1, 'Angular', '5 days');
  submitted = false;
  onSubmit() { this.submitted = true; }
}

//bad practice dont do this
export class Course {
  constructor(
    public courseId: number,
    public courseName: string,
    public duration: string
  ) { }
}
