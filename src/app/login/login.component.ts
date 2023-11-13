import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // encapsulation: ViewEncapsulation.None,
  // imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    userId: 0,
    emailId: 'string',
    fullName: 'string',
    password: 'string',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/Jira/Login',
        this.loginObj
      )
      .subscribe((response: any) => {
        // debugger;
        console.log('login Response', response);
        if (response.result) {
          localStorage.setItem('jiraDetails', JSON.stringify(response.data));
          this.router.navigateByUrl('/board');
        } else {
          alert('credential worng');
        }
      });
  }
}
