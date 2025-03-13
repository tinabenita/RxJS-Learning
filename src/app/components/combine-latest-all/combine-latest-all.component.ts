import { Component, OnInit } from '@angular/core';
import { combineAll, combineLatestAll, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest-all.component.html',
  styleUrl: './combine-latest-all.component.scss'
})
export class CombineLatestAllComponent implements OnInit {

  /*
    Purpose: combineLatestAll is an operator that applies combineLatest to each inner Observable emitted by a higher-order Observable (an Observable of Observables). Essentially, it waits for the source Observable to complete, then combines the latest values from the emitted inner Observables.

    Execution: It waits for the source Observable to complete, then subscribes to each inner Observable and emits arrays containing the latest values from each of them whenever any of them emit a new value.

    Use Case: When you need to combine the latest values from multiple inner Observables after the source Observable completes, similar to combineAll but using combineLatest semantics.

    ---Differences between CombineLatest and CombineLatestAll---

    Observable Type:
    combineLatest: Operates on an array of Observables.
    combineLatestAll: Operates on a higher-order Observable (an Observable of Observables).

    Timing of Emissions:
    combineLatest: Emits whenever any of the input Observables emit a new value.
    combineLatestAll: Emits whenever any of the inner Observables emit a new value, but only after the source Observable completes.

    Use Cases:
    combineLatest: Ideal for real-time scenarios where you need the most up-to-date values from multiple sources.
    combineLatestAll: Useful when you need to combine the latest values from multiple inner Observables after the source Observable completes.
  */

  constructor() {}

  ngOnInit() {

    const source$ = of(
      interval(1000).pipe(take(3)), // Emits 0, 1, 2 at 1-second intervals
      interval(1500).pipe(take(2)), // Emits 0, 1 at 1.5-second intervals
      interval(2000).pipe(take(2))  // Emits 0, 1 at 2-second intervals
    );
    
    console.log('CombineLatestAll Demo')
    source$.pipe(
      combineLatestAll()
    ).subscribe(results => console.log(results));
    // Output: [0, 0, 0], [1, 0, 0], [2, 0, 0], [2, 1, 0], [2, 1, 1]
  }
  
}
