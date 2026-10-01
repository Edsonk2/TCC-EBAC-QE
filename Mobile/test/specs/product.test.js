import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Catálogo de Produtos', () => {

    it('Deve visualizar os detalhes de um produto', async () => {
        await homePage.search()

        await browsePage.searchInput.setValue('In')

        const products = await browsePage.products
        await products.at(0).click()

        expect(
            productPage.getProductTitle('Ingrid Running Jacket')
        ).toBeDisplayed()
    })

    it('Deve permitir pesquisar outro produto no catálogo', async () => {
        await homePage.search()

        await browsePage.searchInput.setValue('Aero')

        const products = await browsePage.products
        await products.at(0).click()

        expect(
            productPage.getProductTitle('Aero Daily Fitness Tee')
        ).toBeDisplayed()
    })

})
