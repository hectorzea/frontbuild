describe('Test Environment Variables', () => {
    it('should load TEST_API_URL from .env.test', () => {
        expect(process.env.TEST_API_URL).toBe('https://api-test.frontbuild.com');
    });
});