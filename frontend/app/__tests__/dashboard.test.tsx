// app/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '@/app/page'; // Importa el componente IndexPage
// import * as SetupMocks from '@/app/mocks/setupMocks'; // Importa setUpMocksclear

// // Mock de setUpMocks
// jest.mock('@/app/mocks/setupMocks', () => ({
//   setUpMocks: jest.fn(),
// }));

// // Mock de TaskDashboard
// jest.mock('@/components/frontbuild/TaskDashboard', () => ({
//   TaskDashboard: () => <div data-testid="task-dashboard">Task Dashboard</div>,
// }));

describe('IndexPage', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada test
  });

  it('is rendering correctly', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('frontbuild-home-page')).toBeInTheDocument();
  });


  // it('should call setUpMocks when NEXT_PUBLIC_ENABLE_MSW is "true"', async () => {
  //   process.env.NEXT_PUBLIC_ENABLE_MSW = 'true';

  //   render(<IndexPage />);

  //   // Espera a que se llame a setUpMocks
  //   await waitFor(() => {
  //     expect(SetupMocks.setUpMocks).toHaveBeenCalled();
  //     expect(screen.getByTestId('task-dashboard')).toBeInTheDocument();
  //   });
  // });

  // it('should not call setUpMocks when NEXT_PUBLIC_ENABLE_MSW is not "true"', async () => {
  //   process.env.NEXT_PUBLIC_ENABLE_MSW = 'false';

  //   render(<IndexPage />);

  //   // Espera un tiempo razonable para asegurarte de que no se llama a setUpMocks
  //   await waitFor(() => { }, { timeout: 100 });

  //   expect(SetupMocks.setUpMocks).not.toHaveBeenCalled();
  // });
});
