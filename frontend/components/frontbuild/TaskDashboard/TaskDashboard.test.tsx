import React from 'react'
// import { http, HttpResponse } from 'msw'
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
    expect(await screen.findByText(/Frontbuild App/i)).toBeInTheDocument()
    // expect(await screen.findByText(/All of the tasks regarding this repo lays here./i)).toBeInTheDocument()
    // expect(await screen.findByText(/Render pipelines without a trace/i)).toBeInTheDocument()
})

//TODO adjust this error for the other comp
// test('handles server error', async () => {
//     server.use(
//         http.get(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks`, () => {
//             return new HttpResponse('Internal Server Error', { status: 500 });
//         })
//     );

//     renderWithProviders(<TaskDashboard title={'Hola'} />, {
//         preloadedState: {
//             tasks: {
//                 tasks: [],
//             },
//             app: {
//                 labels: [],
//                 statuses: [],
//                 priorities: [],
//             },
//         },
//     });

//     expect(await screen.findByTestId('frontbuild-title')).toBeInTheDocument();
//     expect(await screen.findByText(/error msw/i)).toBeInTheDocument();
// });