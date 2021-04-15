const { Builder, By, Key, util, until } = require("selenium-webdriver");
const { assert } = require("assert");

const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/webpage-source/index.html";
async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get(url);
  try{
    let el = await driver.findElement(By.id(`parta-map`));
    await driver.wait(until.elementIsVisible(el),100);
  }catch(e){
    console.log("No element")
  }
}

example();