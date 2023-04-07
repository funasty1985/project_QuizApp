import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';


@Component({
  styleUrls: ['./auth.component.css'],
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  
    public user!: User;
    public errorMessage?: string;

    constructor(
      private router: Router,
      private auth: AuthService
    ){

    }

    ngOnInit(): void {
      this.user = new User();
    }

    authenticate(form: NgForm): void
    {
      if(form.valid)
      {
        this.auth.authenticate(this.user).subscribe(data => { 
          if(data.success){
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl("/");
          }
        })
      }
    }
}
