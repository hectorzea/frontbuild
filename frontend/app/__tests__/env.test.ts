describe('Test Environment Variables', () => {
    it('should load TEST_API_URL from .env.test', () => {
        expect(process.env.TEST_API_URL).toBe('https://api-test.frontbuild.com');
    });

    it('should load TEST_ENV from .env.test', () => {
        expect(process.env.TEST_ENV).toBe('test');
    });

    it('should load ENABLE_MSW from .env.test', () => {
        expect(process.env.ENABLE_MSW).toBe('true');
    });
});