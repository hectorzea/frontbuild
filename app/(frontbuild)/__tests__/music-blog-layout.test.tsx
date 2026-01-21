import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/(music-blog)/layout";
describe("Music Blog Root Layout", () => {
  it("Renders the content", () => {
    render(RootLayout({ children: <>Hola</> })); // <-- render MyLayout here.
    expect(screen.getByText(/Hola/i)).toBeInTheDocument();
  });
});
