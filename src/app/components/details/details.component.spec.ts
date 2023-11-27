// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { DetailsComponent } from './details.component';
// import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { NotFoundComponent } from '../not-found/not-found.component';



// // Create a stub for app-header
// @Component({ selector: 'app-header', template: '' })
// class AppHeaderStub {}

// // Create a stub for app-footer
// @Component({ selector: 'app-footer', template: '' })
// class AppFooterStub {}

// // Create a stub for app-search
// @Component({ selector: 'app-search', template: '' })
// class AppSearchStub {}

// // Create a stub for app-tags
// @Component({ selector: 'app-tags', template: '' })
// class AppTagsStub {}

// // Create a stub for app-not-found
// @Component({ selector: 'app-not-found', template: '' })
// class AppNotFoundStub {}







// describe('DetailsComponent', () => {
//   let component: DetailsComponent;
//   let fixture: ComponentFixture<DetailsComponent>;
//   let activatedRoute: BehaviorSubject<any>;

//   beforeEach(() => {
//     activatedRoute = new BehaviorSubject({ searchItem: 'mockSearchItem' });

//     TestBed.configureTestingModule({
//       declarations: [DetailsComponent,AppHeaderStub,AppFooterStub,AppSearchStub,AppTagsStub,AppNotFoundStub],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: { params: activatedRoute.asObservable() } 
//         }
//       ]
//     });
//     fixture = TestBed.createComponent(DetailsComponent);
//     component = fixture.componentInstance;
//         fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

  
//   it('should have the correct HTML structure', () => {
//     const compiled = fixture.nativeElement;
//     // Test for specific elements and classes in the HTML
//     expect(compiled.querySelector('app-header')).toBeTruthy();
//     expect(compiled.querySelector('app-search')).toBeTruthy();
//     expect(compiled.querySelector('app-tags')).toBeTruthy();
//     expect(compiled.querySelector('app-not-found')).toBeTruthy();
//     expect(compiled.querySelector('.main_heading').textContent).toContain('ORDERS');
//     expect(compiled.querySelector('app-footer')).toBeTruthy();
//   });

//   it('should handle route parameters', () => {
  
//     activatedRoute.next({ searchItem: 'newSearchItem' });
//     fixture.detectChanges();
//   });


// });
