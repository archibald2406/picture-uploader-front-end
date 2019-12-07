import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private router: Router) { }

  onLoginButtonClicked(email: string, password: string) {
    this.authService.login(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigateByUrl('/system');
      });
  }
}
