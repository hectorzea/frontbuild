import { http, HttpResponse } from 'msw'
import { Task } from '../types/api/Api';

type UpdateTaskRequestBody = Pick<Task, 'title' | 'status' | 'label' | 'priority'>;
type UpdateTaskResponseBody = Task;
interface UpdateTaskRequestParams {
    id: string
}


export const taskHandlers = [
    http.get('http://localhost:8080/api/tasks', () => {
        return HttpResponse.json([
            {
                "_id": "67574211b5599f1ebce84868",
                "title": "Exportar interfaces Label y Status para popular selects y agregar/edit task",
                "status": "done",
                "label": "epic",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "675743bc6331e0a65f16a42a",
                "title": "Correr app sin base de datos mongo / docker (msw?)",
                "status": "done",
                "label": "epic",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "6760816d7f14e013cb7a9656",
                "title": "agergar .env para rutas frontend y variar entre ambientes",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "676081ee7f14e013cb7a965d",
                "title": "Agregar respuesta correcta msw /add method mock response",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "676081f97f14e013cb7a965f",
                "title": "Validar boton de save para agregar task",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "676082ad7f14e013cb7a966a",
                "title": "Ajustar docker-compose para re-generar imagenes",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "676083ce7f14e013cb7a9675",
                "title": "generar icono en base al tipo de backend ",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "6760846d7f14e013cb7a968f",
                "title": "eliminar data.tsx de frontend",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "676084aa7f14e013cb7a9695",
                "title": "Delete task con custom event teclado",
                "status": "backlog",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "676084d27f14e013cb7a969f",
                "title": "Edit Task",
                "status": "done",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "676084d77f14e013cb7a96a1",
                "title": "Delete Task",
                "status": "backlog",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67617da7abcf6566c4412daa",
                "title": "Actualizar estados con alertas (post/put/remove)",
                "status": "backlog",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67617dd5abcf6566c4412db4",
                "title": "Agregar alertas despues de ejecutar accion BE (post,put,del)",
                "status": "backlog",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67617e52abcf6566c4412dbe",
                "title": "Ver como ajustar la tabla para mostrar todos los task",
                "status": "backlog",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "6761c66eb3e39a0774237d5e",
                "title": "Configurar React Testing Library + MSW",
                "status": "backlog",
                "label": "epic",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "6761c693b3e39a0774237d64",
                "title": "React testing library msw",
                "status": "backlog",
                "label": "epic",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "6761d7c40bd6d0cbdb7c180a",
                "title": "Entender como funciona la tabla para paginacion.",
                "status": "backlog",
                "label": "documentation",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "6761dcd7b10490a3fb17cb72",
                "title": "Correr app sin base de datos mongo / docker (msw?)",
                "status": "in progress",
                "label": "epic",
                "priority": "high",
                "__v": 0
            }
        ])
    }),
    http.post('http://localhost:8080/api/tasks/add', () => {
        return HttpResponse.json({
            "_id": "675743bc6331e0a65f16a42a",
            "title": "Response task",
            "status": "in progress",
            "label": "epic",
            "priority": "high",
        })
    }),
    http.put<UpdateTaskRequestParams, UpdateTaskRequestBody, UpdateTaskResponseBody>('http://localhost:8080/api/tasks/:id', ({ }) => {
        return HttpResponse.json({
            "_id": "675743bc6331e0a65f16a42a",
            "title": "Response task",
            "status": "in progress",
            "label": "epic",
            "priority": "high",
        })
    })
]
