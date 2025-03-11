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
      const letters = of('a', 'b', 'c');
      const result = letters.pipe(
        mergeMap(x => interval(1000).pipe(map(i => x + i)))
      );
      console.log('MergeMap Demo. Uncomment code to see the output');
      // result.subscribe(x => console.log(x));
  }
}
