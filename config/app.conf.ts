exports.config = {
    runner: 'local',
    specs: [
        './tests/specs/*.spec.ts'
    ],
    exclude: [
    ],

    services: [["appium", {
        port: 4723,
        hostname: "localhost",
        command: 'appium'
    }]],

    maxInstances: 1,
    capabilities: [{
        port: 4723,
        platformName: "android",
        "appium:platformVersion": "12",
        "appium:app": "./src/com.taskmaverick.AUTOTESTapp.apk",
        "appium:automationName": "uiautomator2",
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
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
