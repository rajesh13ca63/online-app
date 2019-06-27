import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [{'name': 'wrogn', 'description': 'Nice' , price: 1000},
              {name: 'apple', description: 'apple', price: 100}
            ];
  constructor(private toastr: ToastrManager) { }

  ngOnInit() {
  }

  share() {
    this.toastr.successToastr('', 'The product has been shared!!', {
      position: 'top-center',
      animate: null
  });

  }

  onNotify() {
    this.toastr.successToastr('', 'You will be notified when the product goes on sale', {
      position: 'top-center',
      animate: null
  });
  }

}
