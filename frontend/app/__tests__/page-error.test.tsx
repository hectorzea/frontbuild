import { render, screen } from '@testing-library/react'
import ErrorPage from '@/app/[locale]/projects/tasks/error'

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useEffect: jest.fn((f) => f()),
}));

describe('PersonalInfoPage', () => {
    it('renders PersonalInfoPage Page', () => {
        const mockError = {} as Error & { digest?: string };
        const mockReset = jest.fn();
        render(<ErrorPage error={mockError} reset={mockReset} />)
        expect(screen.getByText('Something went wrong! (tasks)')).toBeInTheDocument();
    })
})