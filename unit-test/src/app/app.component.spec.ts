import { async, ComponentFixture, TestBed, tick, inject, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	 let component: AppComponent;
     let fixture: ComponentFixture<AppComponent>;
     
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
             AppComponent
         ],
         }).compileComponents();
     }));
	 
	 //beforeEach(() => {
         //fixture = TestBed.createComponent(TestComponent);
         //component = fixture.componentInstance;
		 //de = fixture.debugElement;
     //});
	 
     //it('should create the app', async(() => {
         //const fixture = TestBed.createComponent(AppComponent);
         //const app = fixture.debugElement.componentInstance;
         //expect(app).toBeTruthy();
     //}));
	 
     //it(`should have as title 'unit-test'`, async(() => {
         //const fixture = TestBed.createComponent(AppComponent);
         //const app = fixture.debugElement.componentInstance;
         //expect(app.title).toEqual('unit-test');
     //}));
	 
     //it('should render title in a h1 tag', async(() => {
         //const fixture = TestBed.createComponent(AppComponent);
         //fixture.detectChanges();
         //const compiled = fixture.debugElement.nativeElement;
         //expect(compiled.querySelector('h1').textContent).toContain('Welcome to unit-test!');
     //}));
	 
	 //it('Add three numbers (2 * 0 + 4)', async(() => {
		 //let res = component.addnums(2,0, 4);		
		 //expect(res).toBe('4');
	 //}));
	 
	 //it('should return addition of 2 * 1 + 4', async(() => {
		 //let form = de.query(By.css('form')).nativeElement;
		 //component.a = 2;
		 //component.b = 1;
		 //component.c = 4;
		 //fixture.detectChanges();
		 //form.dispatchEvent(new Event('submit'));
		 //fixture.detectChanges();
		 //expect(component.result).toBe('6');
	 //}));
	 
	 //it('Three Text input fields exist', async(() => {
		 //let inputs = de.queryAll(By.css('input[type=text]'));	
		// expect(inputs.length).toBe(3);
	 //}));
	 
	 //it('One submit field exist', async(() => {
		 //let inputs = de.queryAll(By.css('input[type=submit]'));	
		 //expect(inputs.length).toBe(1);
	 //}));
});
