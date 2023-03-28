//import LoginPage from '../pageobjects/login.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('cc', async () => {
    it('test description', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise')
        browser.getUrl()
    })
})
/*
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})
*/

