import { Component } from '@angular/core';
import { ApiService } from './servicios/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  title = 'CursosFrontend';
}
