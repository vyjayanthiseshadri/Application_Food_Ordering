// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { GalleryComponent } from './gallery.component';
// import { Component } from '@angular/core';


// // Create a stub for app-header
// @Component({ selector: 'app-header', template: '' })
// class AppHeaderStub {}

// // Create a stub for app-footer
// @Component({ selector: 'app-footer', template: '' })
// class AppFooterStub {}

// describe('GalleryComponent', () => {
//   let component: GalleryComponent;
//   let fixture: ComponentFixture<GalleryComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [GalleryComponent,AppHeaderStub,AppFooterStub],providers: [
//         { provide: ActivatedRoute, useValue: {} }
//         // Add other providers if needed
//       ],
//     });
//     fixture = TestBed.createComponent(GalleryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('should have the correct HTML structure', () => {
//     const compiled = fixture.nativeElement;
//     // Test for specific elements and classes in the HTML
//     expect(compiled.querySelector('app-header')).toBeTruthy();
//     expect(compiled.querySelector('.main_heading').textContent).toContain('OUR GALLERY');
//     expect(compiled.querySelector('app-footer')).toBeTruthy();
//   });


// });
