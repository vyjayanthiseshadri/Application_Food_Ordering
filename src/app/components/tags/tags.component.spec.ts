// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TagsComponent } from './tags.component';
// import { Tag } from '../../shared/models/Tag';
// import { FoodService } from '../../services/food/food.service';


// describe('TagsComponent', () => {
//   let component: TagsComponent;
//   let fixture: ComponentFixture<TagsComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TagsComponent],
//       imports: [RouterTestingModule],
//     });
//     fixture = TestBed.createComponent(TagsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

  
//   it('should populate tags array when foodPageTags is not provided', () => {
//     // Mock the getAllTag method in FoodService
//     const foodService = TestBed.inject(FoodService);
//     spyOn(foodService, 'getAllTag').and.returnValue([{ name: 'All' , count:12}, { name: 'roti', count:2 }]);
    
//     // Call ngOnInit
//     component.ngOnInit();

//     // Check if tags array is populated correctly
//     expect(component.tags).toEqual([{name: 'All', count: 12},{name: 'roti', count: 2}]);
//   });

//   it('should navigate to tag when button is clicked', () => {
//     const routerSpy = spyOn(component['router'], 'navigateByUrl');
    
//     // Call the navigateToTag method with a mock tag
//     component.navigateToTag({ name: 'All' });

//     // Check if navigateByUrl is called with the correct URL
//     expect(routerSpy).toHaveBeenCalledWith('/tag/All');
//   });

//   it('should navigate to tag name when button is clicked', () => {
//     const routerSpy = spyOn(component['router'], 'navigateByUrl');
    
//     // Call the navigateToTagName method with a mock tag name
//     component.navigateToTagName('All');

//     // Check if navigateByUrl is called with the correct URL
//     expect(routerSpy).toHaveBeenCalledWith('/tag/All');
//   });

// });
