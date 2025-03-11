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
      const switched = of(1, 2, 3).pipe(
        switchMap(x => of(x, x ** 2, x ** 3))
      );
      console.log('SwitchMap Demo')
      switched.subscribe(x => console.log(x));
  }
}
