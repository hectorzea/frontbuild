import { screen } from '@testing-library/react'
import TasksPage from '@/app/[locale]/projects/tasks/page'
import { renderWithProviders } from '@/app/test-utils'

describe('TasksPage', () => {
    it('renders TasksPage Page', () => {
        renderWithProviders(<TasksPage />, {
            preloadedState: {
                tasks: {
                    tasks: []
                }
            }
        })
        expect(screen.getByTestId('frontbuild-title')).toBeInTheDocument();
        expect(screen.getByTestId('user-nav-trigger')).toBeInTheDocument();
        expect(screen.getByTestId('theme-mode-toggle-button')).toBeInTheDocument();
    })
})