import { fireEvent, screen } from '@testing-library/react'
import { columns } from '@/components/frontbuild/DataTable/Columns';
import { DataTable } from './'
import { renderWithProviders } from '@/app/test-utils';
import { tasks } from '@/app/mocks/taskHandlers';


test('renderiza tabla con 2 filas', () => {
    renderWithProviders(<DataTable data={tasks} columns={columns} />, {
        preloadedState: {
            tasks: {
                tasks: tasks
            }
        }
    })
    //tests with 3 rows and the header
    expect(screen.getAllByRole('row')).toHaveLength(4)
    expect(screen.getByText('Do something with the tests')).toBeInTheDocument();
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
    const { getByPlaceholderText } = renderWithProviders(<DataTable data={tasks} columns={columns} />, {
        preloadedState: {
            tasks: {
                tasks: tasks
            }
        }
    })

    fireEvent.change(getByPlaceholderText('Filter tasks...'), {
        target: { value: 'Render pipelines without a trace' }
    })

    expect(screen.getAllByRole('row')).toHaveLength(2) // Header + 1 fila filtrada
})