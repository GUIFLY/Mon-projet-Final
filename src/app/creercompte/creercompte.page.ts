import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicAuthService } from '../service/ionic-auth.service';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.page.html',
  styleUrls: ['./creercompte.page.scss'],
})
export class CreercomptePage implements OnInit {

  
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Email requis' 
      },
      { 
        type: 'pattern', 
        message: 'Email invalide.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Mot de passe requis.' 
      },
      { 
        type: 'minlength', 
        message: 'Le mot de passe doit avoir au moins 6 caractères' 
      }
    ]
  };

  constructor(private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  signUp(value) {
    this.ionicAuthService.createUser(value)
      .then((response) => {
        this.errorMsg = "";
        this.successMsg = "Utilisateur crée.";
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }

  goToLogin() {
    this.router.navigateByUrl('detail');
  }

}
