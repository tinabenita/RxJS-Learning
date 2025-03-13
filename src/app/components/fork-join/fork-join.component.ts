import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.scss'
})
export class ForkJoinComponent implements OnInit {

  /*
  Purpose: forkJoin is used to wait for multiple Observables to complete and then combine their last emitted values into a single Observable.

  Execution: It subscribes to each input Observable and waits for all of them to complete. Once all Observables are completed, it emits an array containing the last emitted value from each Observable.

  Use Case: Ideal for scenarios where you need to wait for multiple tasks to finish and then process their results.
  */

  constructor() { }
  ngOnInit() { 

    const obs1$ = of('A').pipe(delay(1000));
    const obs2$ = of('B').pipe(delay(2000));
    const obs3$ = of('C').pipe(delay(3000));
    console.log('ForkJoin Demo 1');
    forkJoin([obs1$, obs2$, obs3$])
    .subscribe(results => console.log(results));

    console.log('ForkJoin Demo 2');

    const obs4$ = interval(1000).pipe(take(4)); // Emits 0, 1, 2, 3
    const obs5$ = interval(1500).pipe(take(3)); // Emits 0, 1, 2
    const obs6$ = interval(2000).pipe(take(2)); // Emits 0, 1

    forkJoin([obs4$, obs5$, obs6$])
    .subscribe(results => console.log(results));
  }
}
