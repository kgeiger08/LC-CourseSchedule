import { Component, OnInit } from '@angular/core';

import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  availableCourses: Course[] = [];
  myCourses: Course[] = [];


  constructor() { }

  ngOnInit(): void {
    this.allCourses = [
      new Course("Intro to Underwater Coding", "LC105", ["Mon", "Wed"], "2:00 PM", "3:30 PM", 3),
      new Course("Philosophy & Star Trek", "LC140", ["Tue", "Thu"], "9:00 AM", "10:30 AM", 3),
      new Course("Googling Like a Boss", "LC115", ["Tue", "Thu"], "11:00 AM", "12:00 PM", 2),
      new Course("Narcissism & Stack Overflow: A Case Study", "LC411", ["Mon", "Wed"], "2:30 PM", "4:00 PM", 3),
      new Course("Coding Logic with Spock", "LC240", ["Tue", "Thu"], "8:30 AM", "10:00 AM", 3),
      new Course("Irregular Expressions", "LC317", ["Tue", "Thu"], "2:00 PM", "3:30 PM", 3),
      new Course("Demystifying Asynchronicity", "LC230", ["Wed", "Fri"], "2:00 PM", "3:00 PM", 2),
      new Course("Crochet 101", "LC550", ["Mon", "Wed"], "4:00 PM", "3:00 PM", 3),
      new Course("Speaking Whale", "LC330", ["Wed", "Thu"], "3:00 PM", "5:00 PM", 2),
      new Course("Coding Extravaganza", "LC130", ["Wed", "Fri"], "2:00 PM", "3:00 PM", 3),
    ];

    this.availableCourses = this.allCourses.slice(0);

  }
  
  addCourse(index: number): void {
    this.myCourses.push(this.availableCourses[index]);
    this.availableCourses.splice(index,1);
  }

  removeCourse(index: number): void {
    this.availableCourses.push(this.myCourses[index]);
    this.myCourses.splice(index,1);
  }

}
