import { $ } from "@wdio/globals";
import Page from "./page.js";

class Checkboxes extends Page {
  //Gets the header 3
  get heading() {
    return $(`//div[@id='content']//h3[.='Checkboxes']`);
  }
  //gets checkbox 2
  get checkbox2() {
    return $(`#checkboxes [type='checkbox']:nth-child(3)`);
  }
  //gets checkbox 1
  get checkbox1() {
    return $(`#checkboxes [type='checkbox']:nth-of-type(1)`);
  }
  //Opens the checkbox page of the website
  open() {
    return super.open("checkboxes");
  }
}
//this allows it to be used by other file
export default new Checkboxes();