export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NODE_ENV === "development"
  ) {
    const { initMocks } = await import("./mocks/setupMocks");
    await initMocks();
  }
}
