const {Builder, By, Key, util} = require("selenium-webdriver");
const{assert} = require("assert");

const url = "file:///W:/Desktop/Bilkent/CS458/Projects/cs458-project3-tdd/webpage-source/index.html";
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get(url);
    try{
     await driver.findElement(By.id('parta-map')).then((data) => assert.notEqual(null,data,'element exists!'))
    }catch(e){
      console.error("parta-map does not exist!")
    }
    driver.close()
}
example();