import { Component, OnInit } from '@angular/core';
import { of, mergeMap, interval, map } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit{

  ngOnInit(): void {

    /* 
    Parallel Execution: Inner Observables are processed in parallel, meaning multiple Observables can be active at the same time.

    Order Not Preserved: Emissions from the resulting Observables can be out of order based on the timing of their completion.

    Use Case: When you need to handle tasks concurrently and don't care about the order of emissions.
    */

      const letters = of('a', 'b', 'c');
      const result = letters.pipe(
        mergeMap(x => interval(1000).pipe(map(i => x + i)))
      );
      console.log('MergeMap Demo. Uncomment code to see the output');
      // result.subscribe(x => console.log(x));
  }
}
