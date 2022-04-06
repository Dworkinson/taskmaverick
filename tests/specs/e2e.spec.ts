describe('Should start chrome web app + android app', async () => {
    it('apps starting', async () => {
        const chrome = await browser["chrome"];
        const android = await browser["android"];

        await chrome.url('https://test-org.qa-auto.taskmaverick-feature.com/');
    });
});
