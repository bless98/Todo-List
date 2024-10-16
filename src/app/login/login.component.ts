import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :any = FormGroup;
  submitted = false;
  tokenParam:any;
  
  login (form: NgForm){

    if (form.valid){
      console.log('valid form');
    }
    else {
      console.log('invalid form');
    }
    }

  constructor(private fb:FormBuilder,private router: Router,private authService: AuthserviceService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
    
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    },
    
    );
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }


  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      //console.table(this.loginForm.value);
      
      
     // this.authService.login(this.loginForm.value).subscribe((data)=>{
      //    this.tokenParam = data;
  
       //   console.log("TOKEN");
          
        //   this.router.navigate(['/dashboard'])
         
          
    //  })
      
    }
  }
  
  
}
