const {config} = require('../wdio.conf');

config.services = [['chromedriver', {
    port: 9515,
    hostname: "localhost"
}]];

config.capabilities = [{
    browserName: 'chrome',
    // "goog:chromeOptions": {args: ["start-maximized"]}
}];

exports.config = config;
