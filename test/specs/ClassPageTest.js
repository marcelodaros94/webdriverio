import ClassPage from '../pageobjects/class.page.js'

describe('cc', async () => {
    beforeEach(async function() {
        await ClassPage.open()
    });      
    it('verificar existencia de botones de prueba', async () => {
        let testButtons= await ClassPage.testButtons
        await expect(testButtons).toBeElementsArrayOfSize(3)
    })
    it('Verificar existencia del título', async () => {
        let title = await ClassPage.title
        await expect(title).toBeDisplayed()
    });
})