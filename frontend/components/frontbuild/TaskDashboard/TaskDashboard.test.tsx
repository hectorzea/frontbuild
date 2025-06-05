import React from 'react'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import { TaskDashboard } from '.'
import { renderWithProviders } from '@/app/test-utils'
import { tasks } from '@/app/mocks/taskHandlers'
import { handlers } from '@/app/mocks/handlers'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Loads <TaskDashboard /> and check for main elements', async () => {
    renderWithProviders(<TaskDashboard title={'Frontbuild App'} />, {
        preloadedState: {
            tasks: {
                tasks: tasks
            }
        }
    })

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/Render pipelines without a trace/i)).toBeInTheDocument()
})

test('Loads <TaskDashboard /> and check for main elements', async () => {
    renderWithProviders(<TaskDashboard title={'Frontbuild App'} />, {
        preloadedState: {
            tasks: {
                tasks: []
            }
        }
    })

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/No results/i)).toBeInTheDocument()
})