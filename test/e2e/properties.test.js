const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlPropertiesPage = require('./pages/vl-properties.page');
const { VlPropertiesColumn } = require('./components/vl-properties');

describe('vl-properties', async () => {
    const vlPropertiesPage = new VlPropertiesPage(driver);

    before(async () => {
        return vlPropertiesPage.load();
    });

    it('Als gebruiker kan ik properties zien in een full-size kolom', async () => {
        const properties = await vlPropertiesPage.getProperties();
        const propertiesChildren = await properties.getSlotElements();

        assert.lengthOf(propertiesChildren, 4);
        const fullSizeColumn = await new VlPropertiesColumn(driver, propertiesChildren[propertiesChildren.length - 1]);
        await assert.eventually.isTrue(fullSizeColumn.isFullSize());

        const propertiesList = await fullSizeColumn.getPropertiesList();
        const nationaliteitProperty = await propertiesList.getProperty('Nationaliteit');
        await assert.eventually.equal(nationaliteitProperty.value.getText(), 'Belg');
    });
});
