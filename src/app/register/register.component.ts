import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: any = FormGroup;

  submitted = false;
  registerUserData = {}

  checklog: any = {};

  constructor(private fb: FormBuilder, private authService:AuthserviceService,private router: Router) { }

  ngOnInit(): void {

     //validation

     this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],

      password: ['', [Validators.required]],
    },

    );
  }

  get registerFormControl() {
    return this.signUpForm.controls;
  }

  onlyNumbersAllowed(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
  
    // Check if the character code is within the range of 0-9
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
  //register to the database

onSubmit() {


  // console.table(this.signUpForm.value);
  this.authService.registerUser(this.signUpForm.value).subscribe(
    (res: any) => {
      console.log("hey",res);



    },
    (err: any) => {
      console.log(err)

    })

    this.router.navigate(['/login'])

}



 _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}


}


