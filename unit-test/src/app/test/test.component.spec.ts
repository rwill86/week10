import { async, ComponentFixture, TestBed, tick, inject, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
     let component: TestComponent;
     let fixture: ComponentFixture<TestComponent>;
     
	 let de:DebugElement;
	 let a:HTMLInputElement;
	 let b:HTMLInputElement;
	 let c:HTMLInputElement;
	 
     beforeEach(async(() => {
         TestBed.configureTestingModule({
		 imports: [
		     RouterTestingModule,
		     FormsModule,
		 ],
         declarations: [ 
		     TestComponent,
		 ]
      }).compileComponents();
     }));

     beforeEach(() => {
         fixture = TestBed.createComponent(TestComponent);
         component = fixture.componentInstance;
		 de = fixture.debugElement;
     });

     //it('should create', async() => {
		 //fixture.detectChanges();
         //expect(component).toBeTruthy();
     //}));
	 
	 //it('should have as tile "Welcome to ..."', async() => {
		 //fixture.detectChanges();
         //expect(component.title).toEqual('test');
     //}));
	 
	 it('should return addition of 2 * 1 + 4', async(() => {
		 let form = de.query(By.css('form')).nativeElement;
		 component.a = 2;
		 component.b = 1;
		 component.c = 4;
		 fixture.detectChanges();
		 form.dispatchEvent(new Event('submit'));
		 fixture.detectChanges();
		 expect(component.result).toBe('6');
	 }));
	 
	 it('Add three numbers (2 * 0 + 4)', async(() => {
		 let res = component.addnums(2,0, 4);		
		 expect(res).toBe('4');
	 }));
	 
	 it('Add three numbers (2 * -1 + 4)', async(() => {
		 let res = component.addnums(2,-1, 4);		
		 expect(res).toBe('2');
	 }));
	 
	 it('Three Text input fields exist', async(() => {
		 let inputs = de.queryAll(By.css('input[type=text]'));	
		 expect(inputs.length).toBe(3);
	 }));
	 
	 it('One submit field exist', async(() => {
		 let inputs = de.queryAll(By.css('button'));	
		 expect(inputs.length).toBe(1);
	 }));
	 	 
});
