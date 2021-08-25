let LoginPage = function(){
    
    let user_input = element(by.css('input[placeholder="Username"]'));
    let password_input = element(by.css('input[type="password"]'));
    let goButton = element(by.buttonText('Sign in'));

    this.get = function(url){
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }

    this.enterUser = function(user){
        user_input.sendKeys(user);
    };

    this.enterPassword = function(pass){
        password_input.sendKeys(pass);
    };

    this.clickGo = function(){
        goButton.click();
    };


};

module.exports = new LoginPage();