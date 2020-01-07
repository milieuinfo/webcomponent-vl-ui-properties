
const { assert, driver } = require('vl-ui-core').Test;
const VlPropertiesPage = require('./pages/vl-properties.page');

describe('vl-properties', async () => {
    const vlPropertiesPage = new VlPropertiesPage(driver);

    before(() => {
        return vlPropertiesPage.load();
    });

});
