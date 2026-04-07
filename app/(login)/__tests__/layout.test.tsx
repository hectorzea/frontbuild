import { render, screen, waitFor } from "@testing-library/react";
import RootLayout from "../layout";

describe("Login Layout", () => {
  it("renders the layout", async () => {
    render(<RootLayout>Login</RootLayout>);
    expect(screen.getByText("Cargando sesión...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });
});
