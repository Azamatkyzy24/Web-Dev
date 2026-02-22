import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes += 1;
  }

  onDelete() {

    this.delete.emit(this.product.id);
  }

  get whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramShareUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  stars(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }
}