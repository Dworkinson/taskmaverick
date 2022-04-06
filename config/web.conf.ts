const {config} = require('../wdio.conf');

config.services = [['chromedriver', {
    port: 9515,
    hostname: "localhost"
}]];

config.capabilities = [{
    browserName: 'chrome'
}];

exports.config = config;
