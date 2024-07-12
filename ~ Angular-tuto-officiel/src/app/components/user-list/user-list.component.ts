import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  errors: any = null;
  isLoading: boolean = false;

  constructor(private userService: UserService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data['hydra:member'];
        this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        this.isLoading = false;
      }
      
    });

  }
}
