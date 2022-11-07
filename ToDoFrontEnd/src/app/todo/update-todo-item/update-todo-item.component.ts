import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ToDoItem } from '../../model/ToDoItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.scss']
})
export class UpdateTodoItemComponent implements OnInit {

  todoItem: ToDoItem = new ToDoItem(0, '', '', false)

  constructor(public todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.todoService.findById(Number(id))
    console.log(id)
  }

  update(): void {
    this.todoService.update(this.todoItem);
  }
}
