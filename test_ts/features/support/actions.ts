import { browser, ExpectedConditions } from "protractor";

export class Actions {

  public openWebsite = () => {
    browser.waitForAngularEnabled(false);
    return browser.get("");
  }

  public waitForElement = async (element: any) => {
      return await browser.wait(ExpectedConditions.visibilityOf(element), 4000);
  }

  public isElementClickable = async (element: any) => {
    return await browser.wait(ExpectedConditions.elementToBeClickable(element), 4000);
  }

  // Used to click on an element on the webpage
  public click = async (element: any) => {
    await this.isElementClickable(element);
    return await element.click();
  }

  // Used to type text into a field
  public type = async (element: any, text: string) => {
    await this.waitForElement(element);
    return await element.sendKeys(text);
  }

  // Used to check to see if an element is on the page
   public isElementOnPage = async (element: any) => {
    return await browser.isElementPresent(element);
  }

}
