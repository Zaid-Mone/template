import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UploadType } from 'src/app/core/enums/UploadType';
import { productlist } from 'src/app/core/models/models';
import { Attachment, Product } from 'src/app/core/models/product/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { AppTableComponent } from 'src/app/feature-module/common/app-table/app-table.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule,RouterModule,AppTableComponent,LightboxModule,AddProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit,OnDestroy{

  public routes = routes;
  public toggleData  = false;
  totalRecords:number=0;
  // destroy:Subscription[]=[];
  destroy!:Subscription;
  public productlist: Array<productlist> = [];
  products:Product[]=[];
  albums:Attachment[]=[];



  constructor(
    private _productServices:ProductsService,
    private toast:ToastrService,
    private _lightbox: Lightbox) {}


  ngOnInit(): void {
     this.getProducts();

  }



  openContent() {
    this.toggleData = !this.toggleData;
  }



  OnPageChage(event:any){
    // this.getUsers(event.page,event.pageSize);
   }
  
   OnPageLimitChange(event:any){
    // this.getUsers(event.page,event.pageSize);
   }
  



getProducts(page:number=1,pageSize:number=10){
this.destroy=
this._productServices.getProducts(page,pageSize).subscribe({
  next:(response)=>{
    this.totalRecords = response.content?.totalCount!;
    this.products = response.content?.data!;
  },
  error:(err)=>{
  this.toast.error('something went wrong')
  }
});
}

fillAlbum(){
  if(this.products){
    this.albums = this.products.flatMap(q=>q.attachments).filter(q=>q.extention==2 || q.extention==3 || q.extention==4)!;
  }
}


open(index: number, albumArray: Array<any>): void {
  this._lightbox.open(albumArray, index);
}

close(): void {
  this._lightbox.close();
}



  public sortData(sort: Sort) {
    // const data = this.products.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.productlist = data;
    // } else {
    //   this.productlist = data.sort((a, b) => {         
    //     const aValue = (a as never)[sort.active];         
    //     const bValue = (b as never)[sort.active];
    //     return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    //   });
    // }
  }





  ngOnDestroy(): void {
   if(this.destroy){
    this.destroy.unsubscribe();
   }
  }

}
