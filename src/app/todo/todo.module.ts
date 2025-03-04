import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TodoUpdateComponent } from './todo-update/todo-update.component';

@NgModule({
  declarations: [TodoListComponent, TodoCreateComponent, TodoItemComponent, TodoUpdateComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [TodoCreateComponent, TodoListComponent, TodoListComponent, TodoUpdateComponent],
})
export class TodoModule {}
