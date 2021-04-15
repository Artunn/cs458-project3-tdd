const { Builder, By, Key, util, until, } = require("selenium-webdriver");
var assert = require('chai').assert;
test = require('selenium-webdriver/testing');
webdriver = require('selenium-webdriver');

describe('Part one test cases', function () {
  const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/webpage-source/index.html";
  let driver = new Builder().forBrowser("firefox").build();
  driver.get(url);
  let coordinate1, coordinate2, sendbutton;
  //Check existance of coordinate1
  describe('#Check existance of text fields and buttons', function () {
    it('#Coordinate 1 text field must not be null', function () {
      coordinate1 = driver.findElement(By.id("parta-coordinate1"));
      driver.wait(until.elementIsVisible(coordinate1), 100);
      assert.notEqual(coordinate1, null);
    })

    it('#Coordinate 2 text field must not be null', function () {
      coordinate2 = driver.findElement(By.id("parta-coordinate2"));
      driver.wait(until.elementIsVisible(coordinate2), 100);
      assert.notEqual(coordinate2, null);
    })

    it('#Coordinate 2 text field must not be null', function () {
      coordinate2 = driver.findElement(By.id("parta-coordinate2"));
      driver.wait(until.elementIsVisible(coordinate2), 100);
      assert.notEqual(coordinate2, null);
    })

    it('#Part A Send button must not be null', function () {
      sendbutton = driver.findElement(By.id("parta-sendbutton"));
      driver.wait(until.elementIsVisible(sendbutton), 100);
      assert.notEqual(sendbutton, null);
    })
  })

  describe('#End user testing', function () {
    it('#End user test with right values', async function () {
      await coordinate1.sendKeys("xx3.32");
      await coordinate2.sendKeys(56.321);
      await sendbutton.click();
      console.log(driver.findElement(By.id("parta-textdata")).innerText);
      assert.notEqual("",driver.findElement(By.id("parta-textdata")).innerText);
    }).timeout(20000)
  })
})