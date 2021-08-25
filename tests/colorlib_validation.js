let LoginPage = require('../pages/loginpage');
let MainPage = require('../pages/MainPage')
let FormValidation = require('../pages/FormValidation')

describe('demo color lib test', function () {

    it('Form Validation', function () {

        LoginPage.get('https://colorlib.com/polygon/metis/login.html');
        LoginPage.enterUser('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickGo();
        
        MainPage.menuForms();
        browser.sleep(1000)
        MainPage.optionFormValidation();

        FormValidation.enterName('Carlos');
        browser.sleep(500)
        FormValidation.choiseSport();
        FormValidation.enterUrl('www.holahola.com');
        FormValidation.enterEmail('hola@hola.com');
        FormValidation.enterPassword('1234ca');
        FormValidation.confirmPassword('1234ca');
        FormValidation.enterMinimeSize('123456');
        FormValidation.enterMaximeSize('999999');
        FormValidation.enterNumber('123.12');
        FormValidation.enterIp('127.10.11.1');
        FormValidation.enterDate('2021-08-21');
        FormValidation.enterPast('2010/11/16');
        FormValidation.validateInformation();
        browser.sleep(2000)
    });

});