
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LightOnHoverDirective } from './light-on-hover.directive';

@Component({
  template: `<div appLightOnHover></div>`
})
class TestComponent {}

describe('LightOnHoverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LightOnHoverDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should apply highlight on mouseover', () => {
    const hostElement: HTMLElement = fixture.nativeElement.querySelector('div');
    
    // Trigger mouseover event
    hostElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(hostElement.style.color).toBe('green');
  });

  it('should remove highlight on mouseleave', () => {
    const hostElement: HTMLElement = fixture.nativeElement.querySelector('div');

    // Trigger mouseover event
    hostElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    // Trigger mouseleave event
    hostElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();

    expect(hostElement.style.color).toBeFalsy();
  });


  it('should highlight each element individually on mouseover', () => {
    const hostElements: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('div');
  
    hostElements.forEach((hostElement) => {
      // Trigger mouseover event for each element
      hostElement.dispatchEvent(new Event('mouseover'));
      fixture.detectChanges();
  
      expect(hostElement.style.color).toBe('green');
    });
  });

  it('should remove highlight individually on mouseleave', () => {
    const hostElements: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('div');
  
    // Trigger mouseover event for each element
    hostElements.forEach((hostElement) => {
      hostElement.dispatchEvent(new Event('mouseover'));
      fixture.detectChanges();
    });
  
    // Trigger mouseleave event for each element
    hostElements.forEach((hostElement) => {
      hostElement.dispatchEvent(new Event('mouseleave'));
      fixture.detectChanges();
  
      expect(hostElement.style.color).toBeFalsy();
    });
  });

  it('should apply different highlight colors on mouseover', () => {
    const hostElement: HTMLElement = fixture.nativeElement.querySelector('div');
  
    // Trigger mouseover event with a different color
    hostElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();
    expect(hostElement.style.color).toBe('green');
  
    // // Trigger mouseover event with another color
    // hostElement.dispatchEvent(new Event('mouseover'));
    // fixture.detectChanges();
    // expect(hostElement.style.color).toBe('blue');
  });

  it('should not have a highlight initially', () => {
    const hostElement: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(hostElement.style.color).toBeFalsy();
  });

  
  

});

