import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should navigate to Home', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.navigateToHome();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should navigate to Gallery', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.navigateToGallery();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/gallery');
  });

  it('should navigate to Menu', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.navigateToMenu();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/menu');
  });

  it('should navigate to Orders', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.navigateToOrders();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/details');
  });

  it('should navigate to LogIn', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.navigateToLogIn();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('should have the correct HTML structure', () => {
    const compiled = fixture.nativeElement;

    // Test for specific elements and classes in the HTML
    expect(compiled.querySelector('nav')).toBeTruthy();
    expect(compiled.querySelector('.logo img')).toBeTruthy();
    expect(compiled.querySelectorAll('ul li button').length).toEqual(5);
    // Add more checks for other elements as needed
  });
  
});
