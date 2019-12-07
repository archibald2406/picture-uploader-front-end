import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private authService: AuthService,
              private router: Router) { }

  onSignupButtonClicked(email: string, password: string) {
    this.authService.signup(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigateByUrl('/login');
      });
  }

}
