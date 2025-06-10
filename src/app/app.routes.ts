import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

export const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'users', component: UserScreenComponent},
    {path: 'lessons', component: LessonListComponent}
];
