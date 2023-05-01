import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthDto } from 'src/app/dtos/auth.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;
  errMessage!: string;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  submitForm() {
    const formData: AuthDto = this.loginForm.getRawValue();
    const authInfo = this.authService.signIn(formData);
    if (authInfo === 'Wrong Credentials') {
      this.errMessage = authInfo;
    } else {
      this.errMessage = '';
      this.router.navigate(['profile'], { relativeTo: this.route })
    }
  }
}
