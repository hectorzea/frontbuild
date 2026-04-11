import { render, screen, waitFor } from "@testing-library/react";
import RootLayout from "../layout";

//todo workaround for checks
jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    usePathname: () => ({
      startsWith: () => {},
    }),
  };
});

describe("Login Layout", () => {
  it("renders the layout", async () => {
    render(<RootLayout>Login</RootLayout>);
    expect(screen.getByText("Cargando sesión...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });
});
