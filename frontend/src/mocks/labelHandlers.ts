import { http, HttpResponse } from 'msw'

export const labelHandlers = [
    http.get('http://localhost:8080/api/labels', () => {
        return HttpResponse.json([
            {
                "_id": "6758497311466283e44f1158",
                "value": "bug",
                "label": "Bug",
            },
            {
                "_id": "6758497311466283e44f1133",
                "value": "feature",
                "label": "Feature",
            }
        ])
    }),
]