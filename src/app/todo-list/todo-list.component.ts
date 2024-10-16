import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoForm!: FormGroup;
  works: string[] = []; 

  constructor(
    
    private todoService:TodoService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoForm=this .formBuilder.group(
      {title:['',[Validators.required]]}
    );
    this.works=this.todoService.findAll();
  }

  add(): void{

    this.todoService.add(this.todoForm.value.title);
    this.works=this.todoService.findAll();
  }

  delete(index:number): void{
    var result =confirm('are you sure');
    if(result){
      this.todoService.delete(index);
      this.works=this.todoService.findAll();
    }
  }

}
