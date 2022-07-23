import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  viewcourses(){
    return this.http.get('http://localhost:3000/viewcourse');
  }
  addcourse(course:any){
    return this.http.post<any>('http://localhost:3000/getcourse',course);
  }
}
