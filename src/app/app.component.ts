import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchMapComponent } from "./components/switch-map/switch-map.component";
import { MergeMapComponent } from "./components/merge-map/merge-map.component";
import { SwitchMergeDiffComponent } from "./components/switch-merge-diff/switch-merge-diff.component";
import { ConcatMapComponent } from "./components/concat-map/concat-map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchMapComponent, MergeMapComponent, SwitchMergeDiffComponent, ConcatMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RxJS-Learning';
}
