export class Product {
   productName!: string
   description!: string
   currency!: Currency
   brand!: Brand
   productType!: ProductType
   parcode!: string
   attachments!: Attachment[]
   inStockCount!:  number
   outStockCount!: number
   totalQty!:      number
 }
 
 export class Currency {
   currencyId!: number
   currencyNameAr!: string
   currencyNameEn!: string
 }
 


 export class ProductType {
   productTypeId!: number
   typeNameAr!: string
   typeNameEn!: string
 }
 
 export class Attachment {
   src!: string
   ext!: string
   extention!: number
 }
 

 export class Brand {
  id!:           number;
  brandNameAr!:  string;
  brandNameEn!:  string;
  brandImage!:   string;
  isDeleted!:    boolean;
  creationDate!: Date;
  modifyBy!:     number;
}


export class WebProductType {
  id!:           number;
  typeNameAr!:   string;
  typeNameEn!:   string;
  isDeleted!:    boolean;
  creationDate!: Date;
}
export class Currencies {
  id!:             number;
  currancyNameAr!: string;
  currancyNameEn!: string;
  creationDate!:   Date;
  isDeleted!:      boolean;
}



export class ProductDTO {
  productName!: string;
  description!: string;
  currencyId!: number;
  brandId!: number;
  productTypeId!: number;
  productPrice!: number;
  parcode!: string;
  images!: string;
}