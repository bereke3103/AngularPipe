import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 1000);
  });

  //Так как мы подписываемся на стрим, желательно подписывать его со знаком доллара
  date$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 500);
  });
  //классический подход без async в html
  date: Date;
  constructor() {
    this.date = new Date();
  }
  ngOnInit(): void {
    this.date$.subscribe((kek) => {
      this.date = kek;
    });
  }
}
