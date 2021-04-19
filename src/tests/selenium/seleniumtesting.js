const { Builder, By, Key, util, until, } = require("selenium-webdriver");
var assert = require('chai').assert;
test = require('selenium-webdriver/testing');
webdriver = require('selenium-webdriver');

const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/src/client_side/index.html";
let driver = new Builder().forBrowser("firefox").build();
driver.get(url);
describe('Part one test cases', function () {
  let coordinate1, coordinate2, sendbutton;
  //Check existance of coordinate1
  describe('#Check existance of text fields and buttons', function () {
    it('#Coordinate 1 text field must not be null', function () {
      return driver.wait(until.elementLocated(By.id('parta-coordinate1')), 10 * 1000).then(el => {coordinate1 = el;});
    }).timeout(20000)

    it('#Coordinate 2 text field must not be null',  function () {
      return driver.wait(until.elementLocated(By.id('parta-coordinate2')), 10 * 1000).then(el => {coordinate2 = el;});
    }).timeout(20000)

    it('#Part A Send button must not be null',  function () {
      return driver.wait(until.elementLocated(By.id('parta-sendbutton')), 10 * 1000).then(el => {sendbutton = el;});
    }).timeout(20000)

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


describe('Part two test cases', function () {
  //Check existance of coordinate1
  describe('#Check existance of text fields and buttons', function () {
    it('#Part B Button Should Exist', function () {
      
      return driver.wait(until.elementLocated(By.id('partb-button')), 10 * 1000).then(el => {});
    }).timeout(20000)

    it('#Part B Text Label 1 Should Exist (Dist to Nearest City Center)', function () {
      
      return driver.wait(until.elementLocated(By.id('partb-textlabel1')), 10 * 1000).then(el => {});
    }).timeout(20000)

    it('#Part B Text Label 2 Should Exist (Dist to City Center)', function () {
      return driver.wait(until.elementLocated(By.id('partb-textlabel2')), 10 * 1000).then(el => {});
    }).timeout(20000)

    it('#Get Values)', function () {
      return driver.wait(until.elementLocated(By.id('partb-textlabel2')), 10 * 1000).then(el => {
        el.click();
        
      });
    }).timeout(10000)
  })
})