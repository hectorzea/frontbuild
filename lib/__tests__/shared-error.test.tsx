import { render, screen } from "@testing-library/react";

type ErrorComponent = {
  path: string;
  errorText: string;
  name: string;
};

const errorComponents: ErrorComponent[] = [
  {
    path: "@/app/(music-blog)/error",
    errorText: "Something went wrong on Music Blog",
    name: "Music Blog Error Page",
  },
  {
    path: "@/app/(tasks)/error",
    errorText: "Something went wrong on Tasks Project",
    name: "Tasks Error Page",
  },
  {
    path: "@/app/(frontbuild)/error",
    errorText: "Something went wrong on Frontbuild Page",
    name: "Frontbuild Error Page",
  },
];

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn((f) => f()),
}));

describe.each(errorComponents)(
  "Error Components",
  ({ path, name, errorText }) => {
    it(`${name} must show the error page with text`, async () => {
      const Component = (await import(path)).default;
      const mockError = {} as Error & { digest?: string };
      const mockReset = jest.fn();
      render(<Component error={mockError} reset={mockReset} />);
      expect(screen.getByText(errorText)).toBeInTheDocument();
    });
  },
);
