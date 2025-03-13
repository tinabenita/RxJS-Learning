import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';


@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit {
 
  ngOnInit(): void {

    /*
    Switching Behavior: When a new item is emitted by the source Observable, switchMap unsubscribes from the previous inner Observable and subscribes to the new one.

    Order Not Preserved: Only the latest inner Observable's emissions are considered, and previous ones are discarded if a new one starts. whereas in MergeMap, multiple observables can be active at the same time (concurrent). ConcatMap is sequential and does not discard the previous inner observables. 

    Use Case: When you want to ensure that only the latest Observable's emissions are processed, such as in search or autocomplete scenarios where only the latest user input matters.
    */

      const switched = of(1, 2, 3).pipe(
        switchMap(x => of(x, x ** 2, x ** 3))
      );
      console.log('SwitchMap Demo')
      switched.subscribe(x => console.log(x));
  }
}
