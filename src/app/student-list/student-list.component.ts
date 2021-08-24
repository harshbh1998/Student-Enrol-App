import { HomeServiceService } from '../home-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

  student: any;
  selectedStudents: any;
  constructor(public homeService: HomeServiceService) { 
    
  }

  ngOnInit(): void {
    
  }

  public selectStudent(student:any) {
    this.selectedStudents=student;
  }
  
  id=this.homeService.id; 
  name=this.homeService.name;
  course=this.homeService.course;
  email=this.homeService.email;

}
