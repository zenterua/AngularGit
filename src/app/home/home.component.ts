import { Component, OnInit } from '@angular/core';
import {log} from 'util';

interface User {
  name: string;
  age: number | string;
  jobs: string[];
  logName: () => void;
  logAge?: () => void;
}

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
  someArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    const name = 'max';
    const age = 30;
    const obj = {
      name,
      age,
      func() {
        const full = `${name + age}`;
      }
    };
    // console.log(obj);

    const obj2 = {
      objName: 'power',
      objAge: 33,
    };

    // @ts-ignore
    const {objName: oN, objAge: oA, objJob: oJ = 'pre'} = obj2;
    // console.log(oN, oA, oJ);

    const arr = ['max', 'power'];

    const [arraName, arrSurname, arrAge = 25] = arr;
    console.log(arraName, arrSurname, arrAge);

  }

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

    // console.log( this.func(2, 'five'));
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

    this.func3(1, ...this.someArray);

  }

  func(a: number, b: string): Array<any> {
    // return a + b;
    return [a, b];
    // return 'blabla';
  }

  func2(): void {
    console.log('void function');
  }

  func3(a, ...rest): void {

    rest.forEach((i) => {
      console.log(i);
    });
    console.log(a, ...rest);
  }


}
