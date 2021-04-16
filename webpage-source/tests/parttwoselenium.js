const { Builder, By, Key, util, until, } = require("selenium-webdriver");
var assert = require('chai').assert;
test = require('selenium-webdriver/testing');
webdriver = require('selenium-webdriver');

describe('Part two test cases', function () {
  const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/webpage-source/index.html";
  let driver = new Builder().forBrowser("firefox").build();
  driver.get(url);
  let coordinate1, coordinate2, sendbutton;
  //Check existance of coordinate1
  describe('#Check existance of text fields and buttons', function () {
    it('#Coordinate 1 text field must not be null', function () {
      coordinate1 = driver.findElement(By.id("partb-button"));
      driver.wait(until.elementIsVisible(coordinate1), 100);
      assert.notEqual(coordinate1, null);
    })

    it('#Coordinate 2 text field must not be null', function () {
      coordinate2 = driver.findElement(By.id("partb-textlabel1"));
      driver.wait(until.elementIsVisible(coordinate2), 100);
      assert.notEqual(coordinate2, null);
    })

    it('#Coordinate 2 text field must not be null', function () {
      coordinate2 = driver.findElement(By.id("partb-textlabel2"));
      driver.wait(until.elementIsVisible(coordinate2), 100);
      assert.notEqual(coordinate2, null);
    })

  })
})