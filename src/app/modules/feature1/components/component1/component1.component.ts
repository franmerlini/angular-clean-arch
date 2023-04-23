import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Feature1Actions from '../../store/feature1.actions';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
  private readonly store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(Feature1Actions.loadFeature1s());
  }
}
