import { http, HttpResponse } from 'msw'

export const statusHandlers = [
    http.get('http://localhost:8080/api/status', () => {
        return HttpResponse.json([
            {
                "_id": "67574211b5599f1ebce83868",
                "value": "todo",
                "label": "Todo",
                "icon": "help-circle",
            },
            {
                "_id": "675743bc6331e0a65f26a42a",
                "value": "backlog",
                "label": "Backlog",
                "icon": "help-circle",
            }
        ])
    }),
]