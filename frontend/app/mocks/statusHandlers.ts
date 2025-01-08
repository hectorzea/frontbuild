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
                "_id": "67574211b5599f1ebce33868",
                "value": "in-progress",
                "label": "In progress",
                "icon": "timer",
            },
            {
                "_id": "67574211b5599f1ebce22868",
                "value": "done",
                "label": "Done",
                "icon": "done",
            },
            {
                "_id": "67574211b5599f1ebce44868",
                "value": "cancelled",
                "label": "Cancelled",
                "icon": "cancelled",
            },
            {
                "_id": "675743bc6331e0a65f26442a",
                "value": "backlog",
                "label": "Backlog",
                "icon": "help-circle",
            }
        ])
    }),
]