import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private UserService: UserService
  ) { }

  ngOnInit(): void {

    this.UserService.getUsers().subscribe(data => {
      this.users = data['hydra:member'];
    });

  }
}
