import { World } from "cucumber";
import { Actions } from "./actions";

declare module "cucumber" {
  interface World {
    actions: Actions;
    product: {
      name: string,
      description: string,
      price: string,
    };
  }
}