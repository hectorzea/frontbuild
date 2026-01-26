import { render, screen } from "@testing-library/react";

const loadingComponents = [
  {
    path: "@/app/(music-blog)/loading",
    loadingText: "Loading Songs...",
    name: "Songs Loading Page",
  },
];

describe.each(loadingComponents)(
  "Loading Components",
  ({ path, name, loadingText }) => {
    it(`${name} debe renderizar el spinner correctamente`, async () => {
      const Component = (await import(path)).default;
      render(<Component />);

      expect(screen.getByText(loadingText)).toBeInTheDocument();
    });
  },
);
