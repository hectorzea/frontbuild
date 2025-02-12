import { http, HttpResponse } from 'msw'
import { Task, TaskSuccessResponseSchema } from '../types/api/Api';
import { generateMockObjectId } from '@/lib/utils';

//request bodies
type TaskGeneralPayloadBody = Pick<Task, 'title' | 'status' | 'label' | 'priority'>;
type AddTaskRequestBody = TaskGeneralPayloadBody
type UpdateTaskRequestBody = Task;
type DeleteTaskRequestBody = Pick<Task, '_id'>

//params
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
                "title": "generar icono en base al 'value' de priority y status",
                "status": "done",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "6760846d7f14e013cb7a968f",
                "title": "eliminar data.tsx de frontend",
                "status": "done",
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
                "status": "done",
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
                "status": "done",
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
                "_id": "67631fb98aa5de98f328b51d",
                "title": "BE:Remover estructura de icon en status y priorities",
                "status": "done",
                "label": "bug",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "6770179a02905fe488244db5",
                "title": "Agregar un nuevo font para la app",
                "status": "in-progress",
                "label": "feature",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "677e6e49e319b2405a884519",
                "title": "Leer documentacion de redux toolkit",
                "status": "backlog",
                "label": "documentation",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "677e6e6fe319b2405a88451f",
                "title": "Ajustar responses y tipos en las llamadas de los slices",
                "status": "done",
                "label": "tech-debt",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "677e6f23b9adef53e4732ea3",
                "title": "ajustar archivo de genereacion de types de api",
                "status": "done",
                "label": "tech-debt",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "6784f27fc1b0bf422b454b1b",
                "title": "Ajustar responses de msw con tests",
                "status": "backlog",
                "label": "tech-debt",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "6784f5f0c1b0bf422b454b38",
                "title": "validar caso de error mock para test",
                "status": "backlog",
                "label": "tech-debt",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "678ac235a86e7049cce6461d",
                "title": "Errores de server side rendering al principio de la app?",
                "status": "backlog",
                "label": "bug",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "678ac29f09440e4caedcd0d5",
                "title": "Revisar todos los types de la app / generador",
                "status": "backlog",
                "label": "tech-debt",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "678ac2de09440e4caedcd0db",
                "title": "Error de zod al guardar en production",
                "status": "done",
                "label": "bug",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "678b66899c031c705f623e81",
                "title": "ajustar valores restantes del put para guardar en store (dispatch)",
                "status": "done",
                "label": "bug",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67937b60188818870d4177e4",
                "title": "fix all imports using @/ namespaces",
                "status": "done",
                "label": "tech-debt",
                "priority": "low",
                "__v": 0
            },
            {
                "_id": "679b979e2161a7f7cc1960f4",
                "title": "ajustar menu de labels cuando entramos a un item del menu",
                "status": "done",
                "label": "bug",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "679b989d2161a7f7cc1960f6",
                "title": "AJUSTAR LABELS / ICONS DE SVGS FALTANTES",
                "status": "done",
                "label": "bug",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67ac738a30edc2ffabc1a306",
                "title": "Finalizar EDIT with MOCK",
                "status": "in-progress",
                "label": "feature",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67ac746330edc2ffabc1a308",
                "title": "Interview Module / SSR / SSG",
                "status": "backlog",
                "label": "epic",
                "priority": "high",
                "__v": 0
            },
            {
                "_id": "67ac74c930edc2ffabc1a30a",
                "title": "Agregar subheader de info personal shadcn",
                "status": "todo",
                "label": "feature",
                "priority": "medium",
                "__v": 0
            }
        ])
    }),
    http.post<AddTaskRequestBody, TaskSuccessResponseSchema>('http://localhost:8080/api/tasks/add', async ({ params, request }) => {
        const taskData = await request.json()
        return HttpResponse.json({
            message: "Task added successfully",
            task: { ...taskData, _id: generateMockObjectId() }
        })
    }),
    http.put<UpdateTaskRequestParams, UpdateTaskRequestBody, TaskSuccessResponseSchema>('http://localhost:8080/api/tasks/:id', async ({ request, params }) => {
        const { id } = params
        const taskData = await request.json()
        return HttpResponse.json({
            message: "Task modified successfully",
            task: { ...taskData, _id: id }
        })
    }),
    http.delete<DeleteTaskRequestBody, TaskSuccessResponseSchema>('http://localhost:8080/api/tasks/delete', async ({ request, params }) => {
        return HttpResponse.json({
            "message": "Task deleted successfully",
            "task": {
                "_id": "677aa9af04f883909a374e02",
                "title": "Test task",
                "status": "cancelled",
                "label": "epic",
                "priority": "low",
                "__v": 0
            }
        })
    })
]
