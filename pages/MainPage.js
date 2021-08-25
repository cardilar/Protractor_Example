let MainPage = function(){
    let option_Forms = element(by.xpath('//a[contains(.,"Forms")]'));
    let option_FormValidation = element(by.xpath('//ul/li/a[contains(.,"Form Validation")]'));
    

    this.menuForms = function(){
        option_Forms.click();
    }

    this.optionFormValidation = function(){
        option_FormValidation.click();
    }


}

module.exports = new MainPage();