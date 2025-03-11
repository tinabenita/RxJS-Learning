import { Component, OnInit } from '@angular/core';
import { mergeMap, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-merge-diff',
  standalone: true,
  imports: [],
  templateUrl: './switch-merge-diff.component.html',
  styleUrl: './switch-merge-diff.component.scss'
})
export class SwitchMergeDiffComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    //Merge Map
    const userIds = of(1,2,3  );  
    const userRequests1 = userIds.pipe(
      mergeMap(id => ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${id}`))
    );
    console.log('MergeMap -> MergeMap vs SwitchMap'); //emits all values 1,2,3
    userRequests1.subscribe(user => console.log(user));

    const userRequests2 = userIds.pipe(
      switchMap(id => ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${id}`))
    );
    console.log('SwitchMap -> MergeMap vs SwitchMap'); //only emits value 3 as it takes the latest one
    userRequests2.subscribe(user => console.log(user));
  }

}
