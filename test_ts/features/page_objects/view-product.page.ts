import { $, by, element } from "protractor";

export class ViewProductPage {

  public productName: any;

  constructor() {

    this.productName = (product: any) => {
      return element(by.cssContainingText("h2", product.name));
    };
  }
}
