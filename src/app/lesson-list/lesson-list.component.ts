import { Component, OnInit } from '@angular/core';
import { Lesson } from '../model/lesson.model';
import { DataService } from '../service/data.service';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [LessonDetailsComponent,NgFor],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent implements OnInit{
  lessons: Lesson[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.lessons = this.dataService.getLessons();
  }
}
