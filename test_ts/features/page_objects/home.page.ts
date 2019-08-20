import { $, by, element } from "protractor";

export class HomePage {

  public addProduct: any;

  // would be good if we could make this a type or interface?
  public productInTable: any;

  constructor() {

    this.addProduct = $(".mat-flat-button.mat-primary");

    // it would be great if the product was a type or interface.
    this.productInTable = (product: any) => {
        return element(by.cssContainingText(".mat-cell", product.name));
    };

  }

}
