import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
	 title = 'test';
     public a:number;
	 public b:number;
	 public c:number;
	 public err: string[] = [];
	 public result:string;
     constructor(private router:Router, private form:FormsModule){
     }

     ngOnInit(){
     }
	 
	 public addnumber(event){
		 event.preventDefault();
		 this.err = [];
		 
		 if(isNaN(this.a)){
			 this.err.push('A is not a number.');
			 this.result = '';
		 } 
		 
		 if(isNaN(this.b)){
			 this.err.push('B is not a number.');
			 this.result = '';
		 }
		 
		 if(isNaN(this.c)){
			 this.err.push('C is not a number.');
			 this.result = '';
		 }
		 
		 if(!isNaN(this.a) && !isNaN(this.b) && !isNaN(this.c)){
	         this.result = this.addnums(this.a, this.b, this.c);
		 }
	 }
	 
	 addnums(a, b, c){
		 return ((a * b) + c * 1).toString();
	 }
}
