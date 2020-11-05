import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number;
header:string;
student : Student ={
  id:0,
  name:'',
  email : '',
  phone : 0
}
  constructor( private router : Router , private route : ActivatedRoute ,private studentService : StudentService) { }

  ngOnInit(): void {
   this.id =+ this.route.snapshot.paramMap.get('id');
   this.header = this.id ===0? 'Add Student' : 'Edit Student';
  
   if(this.id !=0){
     this.student = this.studentService.onGetStudent(this.id);
   }
  }

 onSubmit(form : NgForm)
  {
    let student : Student ={
      id:form.value.id,
      name:form.value.name,
      email:form.value.email,
      phone:form.value.phone,

    }
    if(this.id === 0){
      this.studentService.onAdd(student);
    }
    else{
      this.studentService.onUpdate(student);
    }
   
    this.router.navigateByUrl('');
// console.log(form.value);
  }


}