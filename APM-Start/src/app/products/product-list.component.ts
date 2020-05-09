import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './prodcut.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;
    private _listFilter: string;
    public get listFilter(): string {
      return this._listFilter;
    }
    public set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    // products: IProduct[] = [
    //     {
    //         "productId" : 1,
    //         "productName": "Leaf Rake",
    //         "productCode": "GDN-0011",
    //         "releaseDate": "March 19, 2019",
    //         "description": "Leaf rake with 48-inch wooden handle.",
    //         "price": 19.955,
    //         "starRating": 3.2,
    //         imageUrl: 'assets/images/leaf_rake.png'
    //       },
    //       {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2019",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": 32.992,
    //         "starRating": 4.2,
    //         "imageUrl": "assets/images/garden_cart.png"
    //       }
    // ];

    constructor(private productService: ProductService) {
       this.listFilter = null;
    }

    performFilter(keyword: string): IProduct[] {
      keyword = keyword.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(keyword) !== -1);
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log('in OnInit');
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
     }
}
