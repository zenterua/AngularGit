import { Component, OnInit } from '@angular/core';
import {timer } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  reactForm: FormGroup;

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
  someFindArr: any = [1, 2, 3, 4, 5].find(x => x > 3);
  hello22 = 'Hello != Max Power';

  constructor(private formBuilder: FormBuilder) {
    console.log(this.someFindArr);
    console.log('str hello22 ->>> ', this.hello22.includes('!'));
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


    for (const i of this.someArray) {
      console.log(`Item -> ${i}`);
    }

    for (const i of 'ABCDEFG') {
      console.log(`Item -> ${i}`);
    }
  }

  ngOnInit() {

    // Simple react form
    // this.reactForm = new FormGroup({
    //   email: new FormControl(''),
    //   login: new FormControl(''),
    //   password: new FormControl('')
    // });

    // Form builder
    // this.reactForm = this.formBuilder.group({
    //   email: ['', Validators.compose([Validators.required, Validators.email]) ],
    //   login: [''],
    //   password: ['']
    // });

    this.reactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      login: [''],
      password: ['']
    });

    this.str = '1';
    this.num = 2;
    this.a = false;
    this.a = 22;

    this.array = [1, 2, 3];
    this.array2 = [4, 5, 6];
    this.array3 = ['a', 'b', 'c'];
    this.array4 = [true, true, false];
    this.array6 = [1, '2', false];
    console.log('this.array2 ->>', this.someFindArr);

    this.func(2);
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

    const set = new Set().add(1).add(2).add(2).add({}).add({}).add([]);
    console.log(`set size -> ${set.size}`);
    console.log(set.has(2));

    const map = new Map().set(1, '1 but string').set(true, 'was true').set('1', '1 but blabla').set('12', 2 + 2).set(1, 66);
    console.log('Map ->> ', map.has(1));
    console.log('Map ->> ', map.get(1));
    console.log('Map ->> ', map);


    const rxTimer = timer(5000);
    rxTimer.subscribe(
      () => {
        console.log('rx js timer after N second');
       },
      () => {
        console.log('error');
      },
      () => {
        console.log('completed');
      });
  }

  func(a: number, b: number = this.num + 2): void {
    for ( let q = 0; q < 5; q++ ) {
      console.log(q);
    }
    console.log(a + b);
    // return [a, b];
    // return 'blabla';
  }

  func2(): void {
    console.log('void function');
  }

  func3 <T>(a: T, ...rest: T[]): void {

    rest.forEach((i) => {
      console.log(i);
    });
    console.log(a, ...rest);
  }

  submit() {
    console.log(this.reactForm);
  }

}
