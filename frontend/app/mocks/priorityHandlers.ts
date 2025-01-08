import { http, HttpResponse } from 'msw'

export const priorityHandlers = [
    http.get('http://localhost:8080/api/priorities', () => {
        return HttpResponse.json([
            {
                label: "Low",
                value: "low",
                icon: 'arrow-down',
            },
            {
                label: "Medium",
                value: "medium",
                icon: 'arrow-right',
            },
            {
                label: "High",
                value: "high",
                icon: 'arrow-up',
            },
        ])
    }),
]