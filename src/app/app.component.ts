import { Component } from '@angular/core';
import {CrudComponent} from './crud/crud.component';
import {CrudService} from './crud.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [CrudComponent],
  providers:[CrudService]
})
export class AppComponent {
  title = 'Hi Sam,app works!';
}
