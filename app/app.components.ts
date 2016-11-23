import  { Component } from '@angular/core';
let todos = [
    {
        title: 'Выучить Angular2',
        completed: true
    }, 
    {
        title: 'Изучить TypeScript',
        completed: false
    }, 
    {
        title: 'Доделать Домашку',
        completed: false
    }, 
    {
        title: 'Здать Хвосты',
        completed: false
    }
    ];
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.components.css']
})

export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;
    toggle(todo: any) {
        todo.completed = !todo.completed;
        console.log('Binding ', todo);
    }
    delete(todo:any) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index,1);
        }
    }
}