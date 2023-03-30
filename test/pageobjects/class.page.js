

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClassPage extends Page {
    /**
     * define selectors using getter methods
     */
    get testButtons () {
        return $$('button.btn-test');
    }

    get title () {
        return $('h3');
    }
    /*
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     *
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('classattr');
    }
}

export default new ClassPage();
