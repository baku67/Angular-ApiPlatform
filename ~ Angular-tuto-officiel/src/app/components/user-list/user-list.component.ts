import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  errors: any = null;
  isLoading: boolean = false;

  constructor(private userService: UserService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        this.isLoading = false;
      }
      
    });

  }
}
