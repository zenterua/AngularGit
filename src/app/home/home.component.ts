import { Component, OnInit } from '@angular/core';

type User = {name: string, age: number | string, jobs: string[], logName: () => void, logAge?: () => void};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  str = '12';
  num = 21;
  a: boolean | number;
  array: number[];
  array2: Array<number>;
  array3: string[];
  array4: Array<boolean>;
  array5: boolean[] = [false, false];
  array6: [number, string, boolean];

  constructor() { }

  ngOnInit() {
    this.str = '1';
    this.num = 2;
    this.a = false;
    this.a = 22;

    this.array = [1, 2, 3];
    this.array2 = [4, 5, 6];
    this.array3 = ['a', 'b', 'c'];
    this.array4 = [true, true, false];
    this.array6 = [1, '2', false];

    console.log( this.func(2, 'five'));
    this.func2();

    const user: User = {
      name: 'Max',
      age: 22,
      jobs: ['a', 'b'],
      logName(): void {
        console.log(this.name);
      }
    };

    const user2: User = {
      name: 'Max',
      age: 22,
      jobs: ['a', 'b'],
      logName(): void {
        console.log(this.name);
      },
      logAge(): number {
        return this.age;
      }
    };

  }

  func(a: number, b: string): Array<any> {
    // return a + b;
    return [a, b];
    // return 'blabla';
  }

  func2(): void {
    console.log('void function');
  }




}
