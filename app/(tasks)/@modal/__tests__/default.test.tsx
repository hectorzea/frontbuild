import { render } from "@testing-library/react";
import DefaultPage from "@/app/(tasks)/@modal/default";
describe("Music Blog Page", () => {
  it("is rendering correctly", async () => {
    const { container } = render(DefaultPage());
    expect(container.firstChild).toBeNull();
  });
});
