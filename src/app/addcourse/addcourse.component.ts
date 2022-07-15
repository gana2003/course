import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
         courseTitle:"",
         courseDescription:"",
         courseDate:"",
         courseVenue:"",
         courseDuration:""
        }

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.service.addcourse(this.course)
    .subscribe((data)=>{
    })
    alert("Success");
  
  }
}
