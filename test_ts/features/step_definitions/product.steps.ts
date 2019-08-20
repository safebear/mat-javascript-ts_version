import { Before, Given, Then, When} from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";
import { Actions } from "../support/actions";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

Before(function() {

  this.actions = new Actions();
  this.actions.openWebsite();

});

Given("a product doesn\'t exist", function(dataTable) {

  const data = dataTable.hashes();
  this.product = data[0];

  return expect(this.actions.isElementOnPage(homePage.productInTable(this.product))).to.eventually.be.false;

});

When("I add the product", function() {
  this.actions.click(homePage.addProduct);
  this.actions.type(addProductPage.productName, this.product.name);
  this.actions.type(addProductPage.productDescription, this.product.description);
  this.actions.type(addProductPage.productPrice, this.product.price);

  return this.actions.click(addProductPage.submitButton);
});

Then("the product is created", function() {

  return expect(this.actions.waitForElement(viewProductPage.productName(this.product))).to.eventually.be.true;

});
