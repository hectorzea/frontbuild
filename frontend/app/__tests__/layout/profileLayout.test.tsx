import { render, screen } from "@testing-library/react";
import ProfileLayout from "@/app/[locale]/profile/layout";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe("ProfileLayout page", () => {
  it("renders a profile layout", () => {
    render(<ProfileLayout>test</ProfileLayout>);
    expect(screen.getByTestId("frontbuild-profile-layout")).toBeInTheDocument();
  });
});
