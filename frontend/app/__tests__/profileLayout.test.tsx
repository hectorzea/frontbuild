import { render, screen } from '@testing-library/react'
import ProfileLayout from '@/app/[lang]/profile/layout';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
    usePathname() {
        return mockUsePathname();
    },
}));

describe('ProfileLayout page', () => {
    it('renders a profile layout', () => {
        render(<ProfileLayout >test</ProfileLayout>)
        expect(screen.getByTestId('frontbuild-profile-layout')).toBeInTheDocument();
    })
})