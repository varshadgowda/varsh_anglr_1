import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-home-data',
  templateUrl: './home-data.component.html',
  styleUrls: ['./home-data.component.css']
})
export class HomeDataComponent implements OnInit {
	name:String;
	language:String;
  // values: any = [];

    constructor(private router: Router,private SimpleServiceService: SimpleServiceService) { }

  ngOnInit() {
	this.name=this.SimpleServiceService.getFromService();
	this.language=this.SimpleServiceService.getFromServices();  	
  }

}
