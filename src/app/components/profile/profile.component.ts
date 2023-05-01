import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  successMessage!: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  submitForm() {
    const formData = this.profileForm.getRawValue();
    this.successMessage = 'Profile was edited';
    this.authService.editCredentials(formData);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'], { relativeTo: this.route });
  }

}
