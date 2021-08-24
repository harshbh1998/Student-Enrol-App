import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  students=[
    {id:1, name:"Rohan", course:"Javascript", email:"rohan@gmail.com"},
    {id:2, name:"Sarang", course:"C", email:"sarang@gmail.com"},
    {id:3, name:"Vimal", course:"python", email:"vimal@gmail.com"},
    {id:4, name:"Suhana", course:"Javascript", email:"suhana@gmail.com"},

  ];
  id: any;
  name: any;
  course: any;
  email: any;
  
  constructor() { }

  public getStudents(): Array<{id:any, name: any,course:any,email:any}>{
    return this.students;
  }

  public createStudents(students:{id:any,name:any,course:any,email:any}){
    return this.students.push(students);
  }
}
