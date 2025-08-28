import { render, screen } from "@testing-library/react";
import CraftingSoftware from "@/app/[locale]/profile/crafting-software/page";

describe("CraftingSoftware", () => {
  it("renders CraftingSoftware Page", () => {
    render(<CraftingSoftware />);
    expect(screen.getByText(/Understanding the business/i)).toBeInTheDocument();
  });
});
