import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: any = null;

  constructor(private route: ActivatedRoute, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route
    if (id) {
      this.userService.getUser(id).subscribe({
        next: data => {

          console.log('Service response:', data); // Log the entire response
          this.user = data;
          console.log('User:', JSON.stringify(this.user));
        },
        error: err => {
          console.error('Error fetching user:', err);
        }
      });
    } else {
      console.error('No user ID found in route parameters');
    }


  }

}
