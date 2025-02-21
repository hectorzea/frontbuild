import { screen, fireEvent } from '@testing-library/react'
import { columns } from '@/components/frontbuild/DataTable/Columns';
import { DataTable } from './'
import { renderWithProviders } from '@/app/test-utils';
import '@testing-library/jest-dom'


const mockData = [
    {
        "_id": "67ac738a30edc2ffabc1a306",
        "title": "Finalizar EDIT with MOCK",
        "status": "in-progress",
        "label": "feature",
        "priority": "high",
    },
]

test('renderiza tabla con 2 filas', () => {
    renderWithProviders(<DataTable data={mockData} columns={columns} />, {
        preloadedState: {
            tasks: {
                tasks: mockData
            }
        }
    })
    expect(screen.getAllByRole('row')).toHaveLength(2)
    expect(screen.getByText('Finalizar EDIT with MOCK')).toBeInTheDocument();
});

test('renderiza tabla sin items', () => {
    renderWithProviders(<DataTable data={[]} columns={columns} />, {
        preloadedState: {
            tasks: {
                tasks: []
            }
        }
    })
    expect(screen.getAllByRole('row')).toHaveLength(2)
    expect(screen.getByText('No results.')).toBeInTheDocument();
});

test('filtra tareas por texto', async () => {
    const { getByPlaceholderText } = renderWithProviders(<DataTable data={[{
        "_id": "67ac738a30edc2ffabc1a123",
        "title": "Finalizar EDIT with MOCK",
        "status": "in-progress",
        "label": "feature",
        "priority": "high",
    },
    {
        "_id": "67ac738a30edc2ffabc1a306",
        "title": "Raspar Tarea",
        "status": "in-progress",
        "label": "feature",
        "priority": "high",
    }, {
        "_id": "67ac738a30edc2ffabc1a306",
        "title": "Raspar Tarea2",
        "status": "in-progress",
        "label": "feature",
        "priority": "high",
    }]} columns={columns} />, {
        preloadedState: {
            tasks: {
                tasks: [{
                    "_id": "67ac738a30edc2ffabc1a123",
                    "title": "Finalizar EDIT with MOCK",
                    "status": "in-progress",
                    "label": "feature",
                    "priority": "high",
                },
                {
                    "_id": "67ac738a30edc2ffabc1a306",
                    "title": "Raspar Tarea",
                    "status": "in-progress",
                    "label": "feature",
                    "priority": "high",
                },
                {
                    "_id": "67ac738a30edc2ffabc1a306",
                    "title": "Raspar Tarea2",
                    "status": "in-progress",
                    "label": "feature",
                    "priority": "high",
                }]
            }
        }
    })

    fireEvent.change(getByPlaceholderText('Filter tasks...'), {
        target: { value: 'Raspar Tarea2' }
    })

    expect(screen.getAllByRole('row')).toHaveLength(2) // Header + 1 fila filtrada
})