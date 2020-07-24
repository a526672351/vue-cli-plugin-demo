const {prefix, devPort} = require('./config');
module.exports = api => {
    // Use the API here
    let addonConfig;
    if (process.env.VUE_APP_CLI_UI_DEBUG) {
        addonConfig = {
            id: `${prefix}.client-addon`,
            url: `http://localhost:${devPort}/index.js`,
        }
    } else {
        addonConfig = {
            id: `${prefix}.client-addon`,
            path: require('path').join(__dirname, './client-addon/dist'),
        }
    }
    api.addClientAddon(addonConfig)
    api.addView({
        id: `${prefix}.views.index`,
        name: `${prefix}.routes.index`,
        icon: '/_plugin/vue-cli-plugin-yapi/logo.png',
        tooltip: 'Yapi 工作台'
    });
}