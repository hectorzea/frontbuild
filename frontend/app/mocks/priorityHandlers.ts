import { http, HttpResponse } from 'msw'

export const priorityHandlers = [
    http.get(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/priorities`, () => {
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