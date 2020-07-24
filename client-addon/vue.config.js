const { clientAddonConfig } = require('@vue/cli-ui')
const {prefix, devPort} = require('../config');
module.exports = {
  ...clientAddonConfig({
    id: `${prefix}.client-addon`,
    // 开发环境端口 (默认值 8042)
    port: devPort
  })
}