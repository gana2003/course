import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getcourses(){
    return this.http.get('https://mylinkurcodesapp.herokuapp.com/getcourses');
  }
  addcourse(course:any){
    return this.http.post<any>('https://mylinkurcodesapp.herokuapp.com/addcourse',course);
  }
}
