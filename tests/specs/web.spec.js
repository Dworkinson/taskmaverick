describe('Shoult start chrome', async () => {
    it('web app loaded', async () => {
        await browser.url('https://test-org.qa-auto.taskmaverick-feature.com/');
        await browser.pause(3000);
    });
});
//# sourceMappingURL=web.spec.js.map