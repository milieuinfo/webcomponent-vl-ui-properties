const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlPropertiesPage = require('./pages/vl-properties.page');

describe('vl-properties', async () => {
    const vlPropertiesPage = new VlPropertiesPage(driver);

    before(async () => {
        return vlPropertiesPage.load();
    });

    it('dummy test omdat anders de browser vensters niet gesloten worden', () => {
        assert.isTrue(true);
    });
});
