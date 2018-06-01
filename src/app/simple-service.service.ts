import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
	var1:String;
	var2:String;
	// values: any = [];
  
  constructor() { }

  saveToServices(name,language) {
    this.var1 = name;
    this.var2 = language;
    console.log("hii")
    }

	getFromService(){
		return this.var1;
	}
	getFromServices(){
		return this.var2;
	}

}
