import { render } from "@testing-library/react";
import DefaultPage from "@/app/(tasks)/@modal/default";
describe("@modal", () => {
  it("is rendering Default Page correctly", async () => {
    const { container } = render(DefaultPage());
    expect(container.firstChild).toBeNull();
  });
});
