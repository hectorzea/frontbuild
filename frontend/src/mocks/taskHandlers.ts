import { http, HttpResponse } from 'msw'

export const taskHandlers = [
    http.get('http://localhost:8080/api/tasks', () => {
        return HttpResponse.json([
            {
                "_id": "67574211b5599f1ebce84868",
                "title": "Exportar interfaces Label y Status para popular selects y agregar/edit task",
                "status": "in progress",
                "label": "epic",
                "priority": "high",
            },
            {
                "_id": "675743bc6331e0a65f16a42a",
                "title": "Correr app sin base de datos mongo / docker (msw?)",
                "status": "in progress",
                "label": "epic",
                "priority": "high",
            }
        ])
    }),
]