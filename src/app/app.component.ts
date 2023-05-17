import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  e: number = Math.E;

  str: string = 'Hello world';

  date: Date = new Date();

  float: number = 0.5;

  obj = {
    name: 'Bereke',
    age: 24,
    lastname: 'Sakan',
    nat: 'Kazakh',
  };

  //

  searhcField = 'title';

  AllPosts: Post[] = [
    { title: 'Компьютер', text: 'Это самый лучший компьютер' },
    { title: 'Ноутбук', text: 'Ноутбук это то, через чего удобно работать' },
    { title: 'Телефон', text: 'Сейчас все сидят в инстаграмме и телеграамме' },
  ];

  search: string = '';
}
