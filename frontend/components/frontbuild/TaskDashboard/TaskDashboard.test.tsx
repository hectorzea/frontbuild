import React from 'react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { screen, fireEvent } from '@testing-library/react'
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