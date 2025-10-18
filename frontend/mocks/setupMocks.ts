import { handlers } from "./handlers";

export async function initMocks() {
  if (typeof window !== "undefined") {
    const { setupWorker } = await import("msw/browser");
    const worker = setupWorker(...handlers);
    await worker.start({ onUnhandledRequest: "bypass" });
  }
}
