import ClassPage from '../pageobjects/class.page.js'

describe('cc', async () => {
    it('verificar existencia de botones de prueba', async () => {
        ClassPage.open()
        let testButtons= await ClassPage.testButtons
        await expect(testButtons).toBeElementsArrayOfSize(3)
    })
})