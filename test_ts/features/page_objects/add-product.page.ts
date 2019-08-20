import { $ } from "protractor";

export class AddProductPage {

  public productName: any;
  public productDescription: any;
  public productPrice: any;
  public submitButton: any;

  constructor() {

    this.productName = $("#mat-input-0");
    this.productDescription = $("#mat-input-1");
    this.productPrice = $("#mat-input-2");
    this.submitButton = $("[type=submit]");

  }
}
