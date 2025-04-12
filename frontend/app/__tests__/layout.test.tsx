import { render, screen } from '@testing-library/react'
import LayoutContainer from '@/app/layout'

describe('Layout page', () => {
    it('renders a layout', () => {
        render(<LayoutContainer >test</LayoutContainer>)
        expect(screen.getByTestId('body-frontbuild')).toBeInTheDocument();
    })
})