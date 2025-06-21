import { renderHook, waitFor } from "@testing-library/react";
import { useMsw } from "../useMsw";
import * as SetupMocks from "@/app/mocks/setupMocks"; // Importa setUpMocksclear

// Mock de setUpMocks
jest.mock("@/app/mocks/setupMocks", () => ({
  setUpMocks: jest.fn(),
}));

describe("useMsw", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_ENABLE_MSW = "false";
  });
  it("should initialize the mock service worker", async () => {
    process.env.NEXT_PUBLIC_ENABLE_MSW = "true";
    const { result } = renderHook(() => useMsw());
    await waitFor(() => {
      expect(result.current).toBe(true);
      expect(SetupMocks.setUpMocks).toHaveBeenCalled();
    });
  });

  it("should NOT call setupMocks when NEXT_PUBLIC_ENABLE_MSW is false", async () => {
    expect(SetupMocks.setUpMocks).not.toHaveBeenCalled();
  });
});
