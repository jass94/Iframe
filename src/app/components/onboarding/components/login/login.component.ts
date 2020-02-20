import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    AbstractControl,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonValidator } from '../../../../utilities/validators/common.validators';
import { Loader } from '../../../../utilities/services/loaderService/loaderService.service';
import { LoginService } from './login.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  login_sub: Subscription;
  passwordVar = 'password';
ngOnInit()
{
      this.form = this.fb.group({
          'email': ['', Validators.compose([Validators.required, CommonValidator.email])],
          'password': ['', Validators.compose([Validators.required, CommonValidator.strongPassword()])],
      });
}


  constructor(private fb: FormBuilder,private loginService:LoginService
   , private loader: Loader) {

  }

  onSubmit(values, event) {
   
      event.preventDefault();
      if (this.form.valid) {
          const payload = {
              email: values.email,
              password: values.password,
         
          };
          this.loginService.login(payload);
          this.loader.show();
      } 
  }
 

}
