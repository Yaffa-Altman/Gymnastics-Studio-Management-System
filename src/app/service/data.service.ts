import { Injectable } from '@angular/core';
import { UserRole } from '../enum/userRole.enum';
import { User } from '../model/user.model';
import { Team } from '../model/team.model';
import { Lesson } from '../model/lesson.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

private students: User[] = [
    {
        id: '1',
        name: 'Alice Johnson',
        phone: '123-456-7890',
        lessonNumber: 5,
        price: 75, 
        isPaid: true
    },{
        id:'44',
        name:'shira klein',
        phone:'555555555555',
        lessonNumber: 5,
        price:75,
        isPaid:true
    },
    {
        id: '2',
        name: 'Bob Smith',
        phone: '234-567-8901',
        lessonNumber: 5,
        price: 75, 
        isPaid: false
    },
    {
        id: '3',
        name: 'Charlie Brown',
        phone: '345-678-9012',
        lessonNumber: 1,
        price: 200,
        isPaid: true
    },
    {
        id: '4',
        name: 'Diana Prince',
        phone: '456-789-0123',
        lessonNumber: 1,
        price: 200,
        isPaid: false
    },
    {
        id: '5',
        name: 'Ethan Hunt',
        phone: '567-890-1234',
        lessonNumber: 2,
        price: 120, 
        isPaid: true
    },
    {
        id: '6',
        name: 'Fiona Green',
        phone: '678-901-2345',
        lessonNumber: 2,
        price: 120, 
        isPaid: false
    },
    {
        id: '7',
        name: 'George Clooney',
        phone: '789-012-3456',
        lessonNumber: 2,
        price: 120, 
        isPaid: true
    },
    {
        id: '8',
        name: 'Hannah Montana',
        phone: '890-123-4567',
        lessonNumber: 1,
        price: 200,
        isPaid: false
    },
    {
        id: '9',
        name: 'Ian Malcolm',
        phone: '901-234-5678',
        lessonNumber: 4,
        price: 140, 
        isPaid: true
    },
    {
        id: '10',
        name: 'Judy Garland',
        phone: '012-345-6789',
        lessonNumber: 4,
        price: 140, 
        isPaid: false
    }
];

private teamMembers: Team[] = [
    {
        id: '1',
        name: 'John Doe',
        password: 'johnDoe123',
        userRole: UserRole.Teacher
    },
    {
        id: '2',
        name: 'Jane Smith',
        password: 'janeSmith456',
        userRole: UserRole.Secretary
    },
    {
        id: '3',
        name: 'Emily Davis',
        password: 'emilyDavis789',
        userRole: UserRole.Teacher
    },
    {
        id: '4',
        name: 'Michael Brown',
        password: 'michaelBrown321',
        userRole: UserRole.Secretary
    },
    {
        id: '5',
        name: 'Sarah Wilson',
        password: 'sarahWilson654',
        userRole: UserRole.Teacher
    },
    {
        id: '6',
        name: 'David Lee',
        password: 'davidLee987',
        userRole: UserRole.Secretary
    }
];

private lessons: Lesson[] = [
    {
        lessonNumber: 1,
        name: 'Math Basics',
        teacherName: 'John Doe',
        numSessions: 5,
        startDate: new Date('2026-06-09'),
        price: 200, 
        day: 1,
        time: '10:00 AM'
    },
    {
        lessonNumber: 2,
        name: 'Physics Fundamentals',
        teacherName: 'Sarah Wilson',
        numSessions: 5,
        startDate: new Date('2025-10-02'),
        price: 120, 
        day: 2, 
        time: '9:00 AM'
    },
    {
        lessonNumber: 4,
        name: 'Biology Basics',
        teacherName: 'Michael Brown',
        numSessions: 1,
        startDate: new Date('2023-10-03'),
        price: 140, 
        day: 3, 
        time: '10:00 AM'
    },
    {
        lessonNumber: 5,
        name: 'Advanced Math',
        teacherName: 'Emily Davis',
        numSessions: 5,
        startDate: new Date('2023-10-04'),
        price: 75, 
        day: 4, 
        time: '1:00 PM'
    },
    {
        lessonNumber: 3,
        name: 'Statistics',
        teacherName: 'Sarah Wilson',
        numSessions: 5,
        startDate: new Date('2023-10-05'),
        price: 89, 
        day: 5, 
        time: '3:00 PM'
    },
    {
        lessonNumber: 6,
        name: 'basketball',
        teacherName: 'Sarah Wilson',
        numSessions: 8,
        startDate: new Date('2025-10-02'),
        price: 170, 
        day: 3, 
        time: '6:00 PM'
    }
];
    constructor() { }

    getUsers(): User[] { return this.students; }
    getTeamMembers(): Team[] { return this.teamMembers; }
    getLessons(): Lesson[] { return this.lessons; }

}
