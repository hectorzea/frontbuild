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
            },
            {
                "_id": "6758497311466283e44f1134",
                "value": "tech-debt",
                "label": "Tech-Debt",
            },
            {
                "_id": "6758497311466283e44f1135",
                "value": "epic",
                "label": "Epic",
            },
            {
                "_id": "6758497311466283e44f1136",
                "value": "documentation",
                "label": "Documentation",
            },
        ])
    }),
]