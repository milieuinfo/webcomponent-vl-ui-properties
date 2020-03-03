const { assert, driver, By } = require('vl-ui-core').Test.Setup;
const VlPropertiesPage = require('./pages/vl-properties.page');
const { VlPropertiesColumn } = require('./components/vl-properties');

describe('vl-properties', async () => {
    const vlPropertiesPage = new VlPropertiesPage(driver);

    before(async () => {
        return vlPropertiesPage.load();
    });

    it('Als gebruiker kan ik properties zien in een full-size kolom', async () => {
        const propertiesElement = await vlPropertiesPage.getProperties();
        const propertiesChildren = await propertiesElement.getSlotElements();

        assert.lengthOf(propertiesChildren, 4);
        const fullSizeColumn = await new VlPropertiesColumn(driver, propertiesChildren[propertiesChildren.length - 1]);
        await assert.eventually.isTrue(fullSizeColumn.isFullSize());

        const propertiesList = await fullSizeColumn.getPropertiesList();
        const nationaliteitProperty = await propertiesList.getPropertyByTermText('Nationaliteit');
        await assert.eventually.equal(nationaliteitProperty.value.getText(), 'Belg');

        const properties = await propertiesList.getProperties();
        assert.lengthOf(properties, 3);
        const adresProperty = properties[2];
        await assert.eventually.equal(adresProperty.term.getText(), 'Adres');
        const adresElements = await adresProperty.value.findElements(By.css('*'));
        assert.lengthOf(adresElements, 2);
        await assert.eventually.equal(adresElements[0].getText(), 'Havenlaan 88');
        await assert.eventually.equal(adresElements[1].getText(), '1000 Brussel');
    });
});
