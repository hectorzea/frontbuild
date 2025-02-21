import React from 'react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TaskDashboard } from '.'
import { renderWithProviders } from '@/app/test-utils'

export const handlers = [
    http.get(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks`, async () => {
        return HttpResponse.json([
            {
                "_id": "67574211b5599f1ebce84868",
                "title": "Exportar interfaces Label y Status para popular selects y agregar/edit task",
                "status": "done",
                "label": "epic",
                "priority": "high",
                "__v": 0
            }])
    }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Loads <TaskDashboard /> and check for main elements', async () => {
    renderWithProviders(<TaskDashboard />, {
        preloadedState: {
            tasks: {
                tasks: [{
                    "_id": "67574211b5599f1ebce84868",
                    "title": "Exportar interfaces Label y Status para popular selects y agregar/edit task",
                    "status": "done",
                    "label": "epic",
                    "priority": "high",
                },]
            }
        }
    })

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/FrontBuild all task repository!/i)).toBeInTheDocument()
    expect(await screen.findByText(/Exportar interfaces/i)).toBeInTheDocument()
})


test('Add Task', async () => {
    renderWithProviders(<TaskDashboard />, {
        preloadedState: {
            tasks: {
                tasks: [{
                    "_id": "67574211b5599f1ebce84868",
                    "title": "Exportar interfaces Label y Status para popular selects y agregar/edit task",
                    "status": "done",
                    "label": "epic",
                    "priority": "high",
                },]
            }
        }
    })



    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/FrontBuild all task repository!/i)).toBeInTheDocument()
    expect(await screen.findByText(/Exportar interfaces/i)).toBeInTheDocument()

    // call dialog
    fireEvent.click(screen.getByText(/Add Task/i))
    expect(await screen.findByTestId('task-dialog-title')).toBeInTheDocument();

    // const titleInput = screen.getByLabelText(/title/i);
    // fireEvent.change(titleInput, { target: { value: 'Fix tests in tasks' } });

    // const statusSelect = screen.getByLabelText(/status/i);
    // fireEvent.change(statusSelect, { target: { value: 'in-progress' } });

    // const labelSelect = screen.getByLabelText(/label/i);
    // fireEvent.change(labelSelect, { target: { value: 'bug' } });

    // const prioritySelect = screen.getByLabelText(/priority/i);
    // fireEvent.change(prioritySelect, { target: { value: 'low' } });

    // fireEvent.click(screen.getByText(/Save Task/i))

    // expect(await screen.findByText(/Task has been created./i)).toBeInTheDocument()

    // task-form-title
    // task-form-submit-button
})

test('handles server error', async () => {
    server.use(
        http.get(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks`, () => {
            return new HttpResponse('Internal Server Error', { status: 500 });
        })
    );

    renderWithProviders(<TaskDashboard />, {
        preloadedState: {
            tasks: {
                tasks: [],
            },
            app: {
                labels: [],
                statuses: [],
                priorities: [],
            },
        },
    });

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/Error loading tasks/i)).toBeInTheDocument();
});