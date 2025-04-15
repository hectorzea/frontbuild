import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('Layout page', () => {
    it('renders a layout', () => {
        render(<RootLayout >test</RootLayout>)
        expect(screen.getByTestId('body-frontbuild')).toBeInTheDocument();
    })
})