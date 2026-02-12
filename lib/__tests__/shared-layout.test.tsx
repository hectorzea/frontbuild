import { render, screen } from "@testing-library/react";

type LayoutComponent = {
  name: string;
  path: string;
  layoutProps: {
    children: React.ReactNode;
    modal?: React.ReactNode;
  };
};

const layoutComponents: LayoutComponent[] = [
  {
    name: "Tasks",
    path: "@/app/(tasks)/layout",
    layoutProps: { children: <div>Tasks</div>, modal: <div>Modal</div> },
  },
  {
    name: "Hearthstone Card Search",
    path: "@/app/(hs-card-search)/layout",
    layoutProps: { children: <div>Hearthstone Card Search</div> },
  },
  {
    name: "Job Search",
    path: "@/app/(job-search)/layout",
    layoutProps: { children: <div>Job Search</div> },
  },
];

describe.each(layoutComponents)(
  "Layout Pages",
  ({ path, name, layoutProps }) => {
    it(`${name} must show the LAYOUT page`, async () => {
      const Component = (await import(path)).default;
      render(Component({ ...layoutProps }));
      expect(screen.getByText(name)).toBeInTheDocument();
      if (layoutProps.modal) {
        expect(screen.getByText("Modal")).toBeInTheDocument();
      }
    });
  },
);
