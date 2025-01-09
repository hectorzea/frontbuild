import React from 'react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react'
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
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
    renderWithProviders(<TaskDashboard />, { preloadedState: { tasks: { tasks: [] } } })

    expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
    expect(await screen.findByText(/FrontBuild all task repository!/i)).toBeInTheDocument()
})