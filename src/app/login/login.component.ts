import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { usuario: '', clave: '' };

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user).subscribe(result => {
      console.log(result)
    }, error => console.error(error));

    this.dialogRef.close();
  }

}
