import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../Servicios/auth.service';
import {User} from '../../../../Interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onRegister(form: { value: User; }): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }
}
