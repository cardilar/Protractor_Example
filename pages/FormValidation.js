let FormValidation = function(){
    let name = element(by.name('req'));
    let list = element(by.id('sport')).element(by.xpath('//option[.="Football"]'));
    let sport = element(by.xpath('//form[@id="popup-validation"]/div[3]//option[.="Tennis"]'));
    let url = element(by.xpath('//input[@class="validate[required,custom[url]] form-control"]'));
    let email = element(by.name('email1'));
    let passwordclient = element(by.id('pass1'));
    let confirmPasswordclient = element(by.name('pass2'));
    let minimeSize = element(by.xpath('//input[@class="validate[required,minSize[6]] form-control"]'));
    let maximeSize = element(by.id('maxsize1'));
    let number = element(by.name('numbe2r'));
    let ip = element(by.name('ip'));
    let date = element(by.id('date3'));
    let past = element(by.id('past'));
    let buttonValidate = element(by.className('btn btn-primary'));

    this.enterName = function(nameclient){
        name.sendKeys(nameclient);
    }

    this.choiseSport = function(){
        list.click();
        sport.click();    
    }

    this.enterUrl = function(newUrl){
        url.sendKeys(newUrl);
    }

    this.enterEmail = function(newEmail){
        email.sendKeys(newEmail);
    }

    this.enterPassword = function(pass){
        passwordclient.sendKeys(pass);
    }

    this.confirmPassword = function(pass){
        confirmPasswordclient.sendKeys(pass);
    }

    this.enterMinimeSize = function(size){
        minimeSize.sendKeys(size);
    }

    this.enterMaximeSize = function(maxSize){
        maximeSize.clear();
        maximeSize.sendKeys(maxSize);
    }

    this.enterNumber = function(num){
        number.clear();
        number.sendKeys(num);
    }

    this.enterIp = function(newIp){
        ip.clear();
        ip.sendKeys(newIp);
    }

    this.enterDate = function(newDate){
        date.clear();
        date.sendKeys(newDate);
    }

    this.enterPast = function(){
        past.clear();
        past.sendKeys();
    }

    this.validateInformation = function(){
        buttonValidate.click();
        browser.sleep(1000);
        let errorMessage = element.all(by.xpath('//div[@class="formErrorContent"]'));
        expect(errorMessage.isPresent()).toBe(false);    
    }

}

module.exports = new FormValidation();