import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Lesson } from '../model/lesson.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [MatCardModule,NgClass],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent implements OnChanges{
  @Input() lessonDetails!: Lesson;
  
  start: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lessonDetails']) {
      this.start = this.lessonDetails.startDate.getTime() >= new Date().getTime();
    }
  }
}
