import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: User | null = null;
  errors: any = null;
  isLoading: boolean = false; // Déclaration de la variable isLoading

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route
    if (id) {

      this.isLoading = true; // Activer l'indicateur de chargement
      this.userService.getUser(id).subscribe({
        next: data => {

          console.log('Service response:', data); // Log the entire response
          this.user = data;
          console.log('User:', JSON.stringify(this.user));
        },
        error: err => {
          this.errors = err;
          console.error('Error fetching user:', err);
        },

      });
    } else {
      console.error('No user ID found in route parameters');
    }
  }

}
