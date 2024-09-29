import { Injectable } from '@angular/core';
import { DataService } from '../common/data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIResponse, PageList } from '../../models/common/APIResponse';
import { map, Observable } from 'rxjs';
import { UserDetailsDTO } from '../../models/common/UserInfoDTO';
import { environment } from 'src/app/environments/environment';
import { Brand, Currencies, Product, ProductDTO, WebProductType } from '../../models/product/product';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends DataService<any> {

  constructor(private _http:HttpClient) {super(_http) }





getBrands():Observable<APIResponse<Brand[]>>{
  this.resourceName = 'Product/'
  this.ApiName = 'GetBrands';
  this.url = environment.API_LiveURL;
  return this.httpGetWithoutParam();
}


getProductTypes():Observable<APIResponse<WebProductType[]>>{
  this.resourceName = 'Product/'
  this.ApiName = 'GetProductTypes';
  this.url = environment.API_LiveURL;
  return this.httpGetWithoutParam();
}


getCurrencies():Observable<APIResponse<Currencies[]>>{
  this.resourceName = 'Product/'
  this.ApiName = 'GetCurrency';
  this.url = environment.API_LiveURL;
  return this.httpGetWithoutParam();
}



getProducts(page:number,pageSize:number):Observable<APIResponse<PageList<Product>>>{
  let params = new HttpParams()
  .set('PageIndex',page)
  .set('PageSize',pageSize);
  this.resourceName = 'Product/'
  this.ApiName = 'GetProduct';
  this.url = environment.API_BaseURL;
  return this.httpGetWithParam(params);
}



  addProduct(form:FormGroup,files:File[]):Observable<string>{


    const formData = new FormData();
    formData.append('productName', form.get('productName')?.value);
    formData.append('description', form.get('description')?.value);
    formData.append('currencyId', form.get('currencyID')?.value);
    formData.append('brandId', form.get('brandID')?.value);
    formData.append('productTypeId', form.get('typeID')?.value);
    formData.append('productPrice', form.get('productPrice')?.value);
    // formData.append('parcode', form.get('parcode')?.value);
    if (files && files.length > 0) {
      for (let file of files) {
          formData.append('Images', file); 
      }
  }

    this.resourceName = 'Product/'
    this.ApiName = 'AddProduct';
    this.url = environment.API_BaseURL;
    return this.httpPost(formData).pipe(map(a=>a.content));
  }

}
