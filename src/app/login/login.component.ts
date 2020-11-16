import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {Router} from '@angular/router';

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
    public loginService: LoginService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user).subscribe(data => {
      if (data === 'ERROR 01: El usuario o clave son incorrectos' || data === 'ERROR 02: El usuario no existe'){
        console.log("Usuario incorrecto");
      } else {
        localStorage.setItem('usuario',this.user.usuario);
        this.router.navigate(['sedes']);
      }
    }, error => console.error(error));

    this.dialogRef.close();
  }
}
