import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchMapComponent } from "./components/switch-map/switch-map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RxJS-Learning';
}
