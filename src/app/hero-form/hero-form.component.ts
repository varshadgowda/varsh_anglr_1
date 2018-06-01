import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { SimpleServiceService } from '../simple-service.service';

import { Hero } from '../hero';

@Component({
 selector: 'app-hero-form',
 templateUrl: './hero-form.component.html',
 styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

 name = '';
 language = '';
 values: any = [];
constructor(private router: Router){}
	// private SimpleServiceService: SimpleServiceService) { }

 
 onSubmit(form) { 
 if(form.valid) {
 this.values.push({name: this.name, language: this.language});
 form.reset()
 }
 }
	// mySave(){
 //  	this.SimpleServiceService.saveToServices(this.name, this.language);
 //  }

 }	