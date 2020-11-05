import { Injectable } from '@angular/core';
import{Student} from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students : Student[] = [
    {
      id : 1,
      name:"Anjali Singh" ,
      email : "anjaliS@gmail.com",
      phone:1234
    },
    {
      id : 2,
      name:"Sandhya Singh" ,
      email : "sandhayS@gmail.com",
      phone:7890
    },
    {
      id : 3,
      name:"Megha Singh" ,
      email : "meghaS@gmail.com",
      phone:89764
    }


  ];
  constructor() { }

  onGet(){
    return this.students;
  }


  onGetStudent(id:Number){
    return this.students.find(x=>x.id === id);
  }


  onUpdate(student :Student){
    let oldStudent= this.students.find(x=>x.id === student.id);
    oldStudent.name = student.name;
    oldStudent.email = student.email;
    oldStudent.phone = student.phone;

  }


  onAdd(student: Student)
  {
    this.students.push(student);
  }

  onDelete(id:Number){
    let student = this.students.find(x=>x.id === id);
    let index = this.students.indexOf(student,0);
    this.students.splice(index,1);
    
  }
}
