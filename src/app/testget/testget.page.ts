import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametreService } from 'src/providers/parametre.service';

@Component({
  selector: 'app-testget',
  templateUrl: './testget.page.html',
  styleUrls: ['./testget.page.scss'],
})
export class TestgetPage implements OnInit {
  user = '';
  mesdonnees: any;
  tempn;
  pressn;
  constructor(private parametreService: ParametreService, private router: Router) { }

  ngOnInit() {
    this.initializeUserOption();
    this.parametreService.getParametre().subscribe(
      (response) => {
        // console.log(response);
        this.mesdonnees = response;
        this.tempn = (this.mesdonnees.temperature >= 38);
        this.pressn = (this.mesdonnees.pression < 55 || this.mesdonnees.pression > 85);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  initializeUserOption() {
    throw new Error('Method not implemented.');
  }

}
