import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedProducts;

  constructor(
    private cartService: CartService
  ) { }

   ngOnInit() {
    this.selectedProducts = this.cartService.getItems();
  }

}