import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('http://localhost:8080/api/tasks', () => {
        return HttpResponse.json([{
            id: 1,
            title: "Configurar entorno de desarrollo",
            status: "pending",
            label: "setup",
            priority: "high",
        }, {
            id: 2,
            title: "Diseñar la página principal",
            status: "in progress",
            label: "design",
            priority: "medium",
        },])
    }),
]