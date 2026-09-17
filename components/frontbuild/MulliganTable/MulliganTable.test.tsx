import { screen } from "@testing-library/react";
import { MulliganTable } from ".";
import { renderWithProviders } from "@/lib/test-utils";

test("Loads <MulliganTable /> and check for main elements", async () => {
  renderWithProviders(<MulliganTable />, {
    preloadedState: {},
  });
  expect(await screen.findByTestId("mulligan-table-title")).toBeInTheDocument();
});

// test("Loads <TaskDashboard /> and check for main elements", async () => {
//   renderWithProviders(
//     <TaskDashboard
//       subtitle={
//         "Task creator using tanstack react-table and react-hook-form with zod schema validation."
//       }
//       title={"Frontbuild App"}
//     />,
//     {
//       preloadedState: {
//         tasks: {
//           tasks: [],
//         },
//       },
//     }
//   );

//   expect(await screen.findByTestId("frontbuild-title")).toBeInTheDocument();
//   expect(await screen.findByText(/No results/i)).toBeInTheDocument();
// });
