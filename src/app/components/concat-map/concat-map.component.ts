import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss',
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*
      Order Preserved: Emissions are concatenated and flattened in the same order as they were received from the source Observable

      Sequential Execution: Inner Observables are processed one after another, ensuring that each one completes before the next one starts.

      Use Case: When you need to maintain the order of emissions and handle tasks sequentially
    */

    const source = of(1, 2, 3);
    console.log('ConcatMap Demo');
    source
      .pipe(concatMap((val) => of(val * 10, val * 20)))
      .subscribe((val) => console.log(val));
  }
}
