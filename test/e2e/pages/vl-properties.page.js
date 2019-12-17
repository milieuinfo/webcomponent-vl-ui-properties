const VlProperties = require('../components/vl-properties');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlPropertiesPage extends Page {
    async _getProperties(selector) {
        return new VlProperties(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-properties.html');
    }
}

module.exports = VlPropertiesPage;
