import { Component } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { routes } from 'src/app/core/core.index';
import { Brand, Currencies, WebProductType } from 'src/app/core/models/product/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'add-product',
  standalone: true,
  imports: [NgxDropzoneModule,NgxEditorModule,SharedModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  // editordoc = jsonDoc;
  files: File[] = [];
  brands:Brand[]=[];
  productTypes:WebProductType[]=[];
  currencies:Currencies[]=[];
  destroy:Subscription[]=[];
  public routes = routes;
  jsonDoc = '<p></p>';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    sanitize: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'enter the text here',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    
  };
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(
    private _productServices:ProductsService,
    private toast:ToastrService) {}



    form = new FormGroup({
      description: new FormControl({ value: this.jsonDoc, disabled: false },[Validators.required]),
       currencyID: new FormControl({ value:0, disabled: false },[Validators.required]),
       typeID: new FormControl({ value:0, disabled: false },[Validators.required]),
       brandID: new FormControl({ value:0, disabled: false },[Validators.required]),
      productPrice: new FormControl({ value:0, disabled: false },[Validators.required]),
      productName: new FormControl({ value:'', disabled: false },[Validators.required]),
    });





  onRemove(event:File) {
    this.files.splice(this.files.indexOf(event), 1);
   }

  ngOnInit(): void {
    this.editor = new Editor();

    // get brands
    this.getBrands();

    // get product types
    this.getProductTpyes();

    // get currency
    this.getCurrencies();

  }


getBrands(){
  this.destroy.push(this._productServices.getBrands().subscribe({
    next:(response)=>{
      this.brands = response.content!;
    },
    error:(err)=>{
      console.log('something went wrong');
    }
  }))
}

getCurrencies(){
  this.destroy.push(this._productServices.getCurrencies().subscribe({
    next:(response)=>{
      this.currencies = response.content!;
    },
    error:(err)=>{
      console.log('something went wrong');
    }
  }))
}

getProductTpyes(){
  this.destroy.push( this._productServices.getProductTypes().subscribe({
    next:(response)=>{
      this.productTypes = response.content!;
    },
    error:(err)=>{
      console.log('something went wrong');
    }
  }))
}


addProduct(){
  if(this.form.invalid){
    this.toast.error('حدث خطأ ما');
    return;
  }
  this._productServices.addProduct(this.form,this.files).subscribe({
    next:(response)=>{
  this.toast.success(response);
  this.form.reset();
    },
    error:(err)=>{
      this.toast.error(err.error.message);
    }
  })
}


















   onSelect(event: { addedFiles: File[] }) {
    this.files.push(...event.addedFiles);
  }




  onSubmit(){
    debugger

    this.form.controls;
    this.addProduct();
  }











  ngOnDestroy(): void {
    this.editor.destroy();
    if(this.destroy){
      this.destroy.forEach((unSub)=> unSub.unsubscribe());
    }
  }




}
