import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
         
  findAll(): string[] {
    const todoList = localStorage.getItem('todoList');
 
    if (todoList !== null) {
      return JSON.parse(todoList) as string[]; // Use type assertion to tell TypeScript the expected type
    }
  
    return []; // Return an empty array if no todo list exists
  }
  
  
  add(title: string): void{
    if(localStorage.getItem('todoList') ==null)
    {
      let list: string[] = [];
      list.push(title);
      localStorage.setItem('todoList', JSON.stringify(list));
      list.push(title);
      localStorage.setItem('todoList', JSON.stringify(list));
    }
  }

  delete(index: number): void {
    const todoList = localStorage.getItem('todoList');
   
    if (todoList !== null) {
      let list: string[] = JSON.parse(todoList);
      list.splice(index, 1); // Remove the item at the specified index
      localStorage.setItem('todoList', JSON.stringify(list)); // Update localStorage with the modified list
    }
  }
  //delete(index: number):void{
   // let list: string[] =JSON.parse(localStorage.getItem('todoList'));
    //list.splice(index,1);
    //localStorage.setItem('todoList', JSON.stringify(list));
 // }
  
}
