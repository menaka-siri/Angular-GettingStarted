import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                "productId" : 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2019",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.955,
                "starRating": 3.2,
                imageUrl: 'assets/images/leaf_rake.png'
              },
              {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.992,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png"
              },
              {
                "productId": 3,
                "productName": "Garden Cart Pro",
                "productCode": "GDN-0099",
                "releaseDate": "March 18, 2020",
                "description": "90++ gallon capacity rolling garden cart",
                "price": 92.992,
                "starRating": 4.8,
                "imageUrl": "assets/images/garden_cart.png"
              }
        ];
    }
}
