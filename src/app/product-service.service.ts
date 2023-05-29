import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from './common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private apiUrl = 'http://127.0.0.1:8088/api/products';

  private apiUrl = 'http://127.0.0.1:3000/products';

  // Thay đổi URL tương ứng với server của bạn

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl);
    // return this.http.get<any>(this.apiUrl).pipe(
    //   map((response) =>
    //     response.datas.map((data: any) => ({
    //       id: data._id,
    //       name: data.name,
    //       price: data.price,
    //       desc: data.description,
    //     }))
    //   ),
    //   catchError(this.handleError)
    // );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage = 'Đã xảy ra lỗi';
  //   if (error.error instanceof ErrorEvent) {
  //     // Xử lý lỗi client-side
  //     errorMessage = error.error.message;
  //   } else {
  //     // Xử lý lỗi server-side
  //     errorMessage = `Mã lỗi: ${error.status}\nThông báo: ${error.error.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

  getProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, product);
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
