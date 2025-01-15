import React from 'react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TaskDashboard } from './TaskDashboard'
import { renderWithProviders } from '@/app/test-utils'

export const handlers = [
    http.get('http://localhost:8080/api/tasks', async () => {
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
    http.get('http://localhost:8080/api/tasks', () => {
        return new HttpResponse('error', { status: 500 });
    }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

//PROBAR siguientes casos despues
//comentar este codigo y llenar el store de datos con tasks y poblar la tabla con los datos? caso de uso? SI, pero probar.
// dejar el codigo

test('loads and displays greeting', async () => {
    renderWithProviders(<TaskDashboard />, { preloadedState: { tasks: { tasks: [] } } })

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/FrontBuild all task repository!/i)).toBeInTheDocument()
    expect(await screen.findByText(/Exportar interfaces/i)).toBeInTheDocument()
})

//todo handle test case for table or render a different element for table
//todo if table can render by somehow error or whatever no data scenarios to check
//todo 1 this test is failing due to a row on table error due to no data
test('handles server error', async () => {
    server.use(
        http.get('http://localhost:8080/api/tasks', () => {
            return new HttpResponse('Internal Server Error', { status: 500 });
        })
    );

    renderWithProviders(<TaskDashboard />, {
        preloadedState: {
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