import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent implements OnInit{

  /*
  Purpose: combineLatest combines the latest values from multiple Observables and emits them as an array whenever any of the Observables emit a new value.

  Execution: It emits whenever one of the input Observables emits a new value, with the emitted array containing the latest values from all input Observables.

  Use Case: Useful for scenarios where you need to react to the latest values from multiple sources.

  ---Difference between ForkJoin and CombineLatest:---
  forkJoin:
  Emits only once, after all Observables have completed.
  Emits an array containing the last emitted value from each Observable.
  Ideal for tasks that need to be completed before processing the results collectively.

  combineLatest:
  Emits whenever any of the Observables emit a new value.
  Emits an array containing the latest values from all Observables.
  Ideal for real-time scenarios where you need the most up-to-date values from multiple sources.
  */

  ngOnInit(): void {
    const obs1$ = interval(1000).pipe(take(3)); // Emits 0, 1, 2 at 1-second intervals
    const obs2$ = interval(1500).pipe(take(2)); // Emits 0, 1 at 1.5-second intervals
    const obs3$ = interval(2000).pipe(take(2)); // Emits 0, 1 at 2-second intervals
    
    console.log('CombineLatest Demo');
    combineLatest([obs1$, obs2$, obs3$]).subscribe(results => console.log(results));
    // Output:  [0, 0, 0], [1, 0, 0], [1, 1, 0], [2, 1, 0], [2, 1, 1]
  }
}
