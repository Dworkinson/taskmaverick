exports.config = {
    runner: 'local',
    specs: [
        './tests/specs/*.spec.ts'
    ],
    exclude: [
    ],

    services: [["chromedriver", {
        port: 9515,
        hostname: "localhost"
    }], ["appium", {
        port: 4723,
        hostname: "localhost",
        command: 'appium'
    }]],

    maxInstances: 1,
    capabilities: {
        chrome: {
            host: "localhost",
            port: 9515,
            path: "/",
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {args: ['start-maximized']}
            }
        },
        android: {
            host: "localhost",
            port: 4723,
            capabilities: {
                platformName: "android",
                "appium:platformVersion": "12",
                "appium:deviceName": "PixelXL",
                "appium:app": "./src/com.taskmaverick.AUTOTESTapp.apk",
                "appium:automationName": "uiautomator2",
            }
        }
    },

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 60 * 1000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 0,
        require: ['tsconfig-paths/register']
    },
}
