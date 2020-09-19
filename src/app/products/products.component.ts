import { MockData } from './../mock-data/product-data';
import { Product } from './../model/produtcs-model';

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data = {
    id: 101,
    title: 'Master',
  };
  phones: Product[];
  constructor() {}

  ngOnInit(): void {}
}
