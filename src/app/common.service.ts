import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
showHeader=new BehaviorSubject<boolean>(true);
searchText = new BehaviorSubject<string>('');
tag= new BehaviorSubject<string>('');
showFooter = new BehaviorSubject<boolean>(true);

}
