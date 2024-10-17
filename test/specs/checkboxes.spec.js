import { expect } from "@wdio/globals";
import Checkboxes from "../pageobjects/checkboxes.page.js";

describe("My if statement test", () => {
  it("Test fulfills the if statement", async () => {
    //Opens the page
    await Checkboxes.open();
    console.log("checking checkbox :" + await Checkboxes.checkbox1.isSelected())
    await browser.pause(500)
    //Checks to see if the checkbox is not selected
    if (await Checkboxes.checkbox1.isSelected() != true) {
      //Checks to see if checkbox1 is clickable
      await Checkboxes.checkbox1.isClickable();
      await Checkboxes.checkbox1.click();
      //checks to see if the checkbox is selected
      await expect(Checkboxes.checkbox1).toBeSelected();
    }
    await browser.pause(500)
  });
  it('Test checks off checkbox2 using if statement', async () => {
    if (await Checkboxes.checkbox2.isSelected() != false) {
        //Checks to see if checkbox1 is clickable
        await Checkboxes.checkbox2.isClickable();
        await Checkboxes.checkbox2.click();
        //checks to see if the checkbox is selected
        await expect(Checkboxes.checkbox2).not.toBeSelected();
      }
  });
  it('Test checks off checkbox1 using if statement', async () => {
    if (await Checkboxes.checkbox1.isSelected() != false) {
        //Checks to see if checkbox1 is clickable
        await Checkboxes.checkbox1.isClickable();
        await Checkboxes.checkbox1.click();
        //checks to see if the checkbox is selected
        await expect(Checkboxes.checkbox1).not.toBeSelected();
      }
  });
});
