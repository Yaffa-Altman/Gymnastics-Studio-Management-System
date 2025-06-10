import { ChangeDetectionStrategy, Component, signal, NgModule, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserRole } from '../enum/userRole.enum';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Team } from '../model/team.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{

  teamMembers: Team[] = [];
  loginForm: FormGroup;
  currentRoleUser: UserRole | undefined;
  readonly dialog = inject(MatDialog);

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.teamMembers = this.dataService.getTeamMembers();
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  clickEnter() {
    this.currentRoleUser = this.teamMembers.find(u => u.password == this.loginForm.get('password')?.value && u.name == this.loginForm.get('userName')?.value)?.userRole;
    switch (this.currentRoleUser) {
      case UserRole.Secretary:
        this.router.navigate(['./users']);
        break;
      case UserRole.Teacher:
        this.router.navigate(['./lessons'])
        break;

      default:
        this.openDialog();
        break;
    }
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}
