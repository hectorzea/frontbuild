import { render, screen } from '@testing-library/react'
import ProfileLayout from '@/app/[lang]/profile/layout';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
    usePathname() {
        return mockUsePathname();
    },
}));

describe('ProfileLayout page', () => {
    it('renders a profile layout', async () => {
        const jsx = await ProfileLayout({ children: <div>test</div> });
        render(jsx)
        expect(screen.getByTestId('frontbuild-profile-layout')).toBeInTheDocument();
    })
})