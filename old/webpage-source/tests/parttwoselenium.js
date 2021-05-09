const { Builder, By, Key, util, until, } = require("selenium-webdriver");
var assert = require('chai').assert;
test = require('selenium-webdriver/testing');
webdriver = require('selenium-webdriver');

describe('Part two test cases', function () {
  //const url = "file:///D:/CS/Current/cs458-project3-tdd/webpage-source/index.html";
  const url = "file:///Applications/MAMP/htdocs/cs458-project3-tdd/src/client_side/index.html";
  let driver = new Builder().forBrowser("firefox").build();
  driver.get(url);

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