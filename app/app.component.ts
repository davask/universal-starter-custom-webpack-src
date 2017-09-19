import { Component, OnInit } from '@angular/core';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) { }

  ngOnInit() {
    // This is an example
    this.cache.set('message', 'Hello World');
  }
}
