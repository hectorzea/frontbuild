import React from 'react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import { TaskForm } from '.'
import { renderWithProviders } from '@/app/test-utils'
import { tasks } from '@/app/mocks/taskHandlers'
import { handlers } from '@/app/mocks/handlers'
import userEvent from '@testing-library/user-event';

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Loads <TaskForm /> and check for main elements', async () => {
    const user = userEvent.setup()
    renderWithProviders(<TaskForm mode={"add"} defaultValues={{}} onOpenChange={jest.fn()} />, {
        preloadedState: {
            tasks: {
                tasks: tasks
            },
            app: {
                labels: [
                    {
                        "_id": "6758497311466283e44f1158",
                        "value": "bug",
                        "label": "Bug"
                    },
                    {
                        "_id": "6758497311466283e44f1133",
                        "value": "feature",
                        "label": "Feature"
                    },
                    {
                        "_id": "6758497311466283e44f1134",
                        "value": "tech-debt",
                        "label": "Tech-Debt"
                    },
                    {
                        "_id": "6758497311466283e44f1135",
                        "value": "epic",
                        "label": "Epic"
                    },
                    {
                        "_id": "6758497311466283e44f1136",
                        "value": "documentation",
                        "label": "Documentation"
                    }
                ],
                statuses: [
                    {
                        "_id": "67574211b5599f1ebce83868",
                        "value": "todo",
                        "label": "Todo",
                    },
                    {
                        "_id": "67574211b5599f1ebce33868",
                        "value": "in-progress",
                        "label": "In progress",
                    },
                    {
                        "_id": "67574211b5599f1ebce22868",
                        "value": "done",
                        "label": "Done",
                    },
                    {
                        "_id": "67574211b5599f1ebce44868",
                        "value": "cancelled",
                        "label": "Cancelled",
                    },
                    {
                        "_id": "675743bc6331e0a65f26442a",
                        "value": "backlog",
                        "label": "Backlog",
                    }
                ],
                priorities: [
                    {
                        "label": "Low",
                        "value": "low",
                    },
                    {
                        "label": "Medium",
                        "value": "medium",
                    },
                    {
                        "label": "High",
                        "value": "high",
                    }
                ],
            },
        }
    })

    expect(await screen.findByTestId('task-form-title')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('task-form-title'), 'Hello!')
    expect(screen.getByTestId('task-form-title')).toHaveValue('Hello!')

    //   taskHandlers.ts                         |   70.58 |      100 |     100 |   70.58 | 46-51,53-59,61-67  
    // await userEvent.click(screen.getByTestId('task-form-status'));
    // await userEvent.click(screen.getByTestId('status-item-todo'));

    // await userEvent.click(screen.getByTestId('task-form-label'));
    // await userEvent.click(screen.getByTestId('label-item-feature'));

    // await userEvent.click(screen.getByTestId('task-form-priority'));
    // await userEvent.click(screen.getByTestId('priority-item-low'));
    
    // await user.click(screen.getByTestId('task-form-submit-button'));

    // expect(await screen.findByTestId('task-form-titlSe')).toBeInTheDocument();

})