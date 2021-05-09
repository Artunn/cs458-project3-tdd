const { Builder, By, Key, util, until, } = require("selenium-webdriver");
var assert = require('chai').assert;
test = require('selenium-webdriver/testing');
webdriver = require('selenium-webdriver');

describe('Part C test cases', function () {
    //const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/webpage-source/index.html";
    const url = "file:///Applications/MAMP/htdocs/cs458-project3-tdd/src/client_side/index.html";
    let driver = new Builder().forBrowser("firefox").build();
    driver.get(url);
    let coordinate1, coordinate2, sendbutton, sendAutoButton;
  
    describe('#Check existance of text fields and buttons', function () {
      it('#Coordinate 1 text field must not be null', function () {
        return driver.wait(until.elementLocated(By.id('partc-coordinate1')), 10 * 1000).then(el => {coordinate1 = el;});
      }).timeout(5000)
  
      it('#Coordinate 2 text field must not be null',  function () {
        return driver.wait(until.elementLocated(By.id('partc-coordinate2')), 10 * 1000).then(el => {coordinate2 = el;});
      }).timeout(5000)
  
      it('#Part C Send button must not be null',  function () {
        return driver.wait(until.elementLocated(By.id('partc-button')), 10 * 1000).then(el => {sendbutton = el;});
      }).timeout(5000)
  
      it('#Part C Send Auto(By device GPS location) button must not be null',  function () {
        return driver.wait(until.elementLocated(By.id('partc-button-auto')), 10 * 1000).then(el => {sendAutoButton = el;});
      }).timeout(5000)
  
    })
  
    describe('#End user testing', function () {
      it('#End user test with right values', async function () {
        await coordinate1.sendKeys("41.0082");
        await coordinate2.sendKeys("28.9784");
        await sendbutton.click();
        console.log(driver.findElement(By.id("partc-textdata")).innerText);
        assert.notEqual("6369004.316294169",driver.findElement(By.id("partc-textdata")).innerText);
      }).timeout(5000)
  
      it('#End user test with device GPS values', async function () {
        await sendAutoButton.click();
        console.log(driver.findElement(By.id("partc-textdata")).innerText);
        assert.notEqual("6370322.2606166955",driver.findElement(By.id("partc-textdata")).innerText);
      }).timeout(5000)
    })
  })